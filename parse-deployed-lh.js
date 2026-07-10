const fs = require('fs');

try {
    const report = JSON.parse(fs.readFileSync('./lh-deployed-report.json', 'utf8'));

    let out = '--- SCORES ---\n';
    const categories = report.categories;
    for (const key in categories) {
        out += `${categories[key].title}: ${Math.round(categories[key].score * 100)}\n`;
    }

    out += '\n--- CORE WEB VITALS ---\n';
    const lcp = report.audits['largest-contentful-paint'];
    const cls = report.audits['cumulative-layout-shift'];
    const tbt = report.audits['total-blocking-time'];
    const ttfb = report.audits['server-response-time'];
    const speedIndex = report.audits['speed-index'];

    out += `LCP: ${lcp.displayValue} (Score: ${lcp.score})\n`;
    out += `CLS: ${cls.displayValue} (Score: ${cls.score})\n`;
    out += `TBT: ${tbt.displayValue} (Score: ${tbt.score})\n`;
    out += `TTFB: ${ttfb.displayValue} (Score: ${ttfb.score})\n`;

    out += '\n--- ALL AUDITS < 100 (Performance, SEO, Accessibility, Best Practices) ---\n';
    const audits = report.audits;

    // Sort audits by impact (weight and score)
    const failedAudits = Object.values(audits)
        .filter(a => a.score !== null && a.score < 1)
        .sort((a, b) => {
            // Lower score comes first. If equal, higher weight comes first.
            if (a.score !== b.score) return a.score - b.score;
            return (b.weight || 0) - (a.weight || 0);
        });

    for (const audit of failedAudits) {
        // Filter out some noisy/low-impact audits for clarity unless they are performance/seo related
        if (audit.score >= 0.9 && !['performance', 'seo'].includes(audit.scoreDisplayMode)) continue;

        out += `[Score: ${Math.round(audit.score * 100)}] ${audit.id} - ${audit.title}\n`;
        if (audit.displayValue) {
            out += `   Value: ${audit.displayValue}\n`;
        }

        // Include details for specific important audits
        if (['render-blocking-resources', 'unminified-javascript', 'unused-javascript', 'modern-image-formats', 'total-byte-weight', 'server-response-time'].includes(audit.id) && audit.details && audit.details.items) {
            out += `   Details:\n`;
            audit.details.items.slice(0, 5).forEach(item => {
                if (item.url) out += `     - ${item.url.substring(0, 80)}... (Size: ${item.wastedBytes ? Math.round(item.wastedBytes / 1024) + ' KB' : (item.totalBytes ? Math.round(item.totalBytes / 1024) + ' KB' : '')})\n`;
            });
        }
    }

    out += '\n--- TAP TARGETS & ARIA ---\n';
    const tapTargets = report.audits['tap-targets'];
    if (tapTargets) out += `Tap Targets: ${tapTargets.title} (Score: ${tapTargets.score})\n`;

    const ariaLabels = report.audits['aria-labels'];
    if (ariaLabels) out += `ARIA Labels: ${ariaLabels.title} (Score: ${ariaLabels.score})\n`;

    fs.writeFileSync('./lh-deployed-summary.txt', out, 'utf8');
    console.log("Summary generated at lh-deployed-summary.txt");
} catch (e) {
    console.error("Error parsing report:", e.message);
}
