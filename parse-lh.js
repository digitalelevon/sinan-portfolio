const fs = require('fs');

try {
    const report = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));

    let out = '--- SCORES ---\n';
    const categories = report.categories;
    for (const key in categories) {
        out += `${categories[key].title}: ${Math.round(categories[key].score * 100)}\n`;
    }

    out += '\n--- ALL AUDITS < 100 ---\n';
    const audits = report.audits;
    for (const key in audits) {
        const audit = audits[key];
        if (audit.score !== null && audit.score < 1) {
            out += `[${Math.round(audit.score * 100)}] ${key} - ${audit.title}\n`;
            if (audit.displayValue) {
                out += `   Value: ${audit.displayValue}\n`;
            }
        }
    }
    fs.writeFileSync('./lh-summary-utf8.txt', out, 'utf8');
} catch (e) {
    console.error("Error parsing report:", e.message);
}
