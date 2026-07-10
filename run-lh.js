const { spawn, execSync } = require('child_process');
const fs = require('fs');

console.log("Starting Next.js server on port 3001...");
const server = spawn('npm.cmd', ['run', 'start', '--', '-p', '3001'], {
    shell: true,
    stdio: 'ignore',
    detached: false
});

setTimeout(() => {
    console.log("Running Lighthouse...");
    try {
        execSync('npx.cmd lighthouse http://localhost:3001 --output json --output-path ./lighthouse-report-prod.json --chrome-flags="--headless" --only-categories=performance,seo,accessibility,best-practices', { stdio: 'inherit' });

        const r = JSON.parse(fs.readFileSync('./lighthouse-report-prod.json', 'utf8'));
        let out = 'SCORES:\n';
        for (let k in r.categories) {
            out += r.categories[k].title + ': ' + Math.round(r.categories[k].score * 100) + '\n';
        }

        // Also add top 5 issues for Performance and SEO
        out += '\nTop Issues:\n';
        const audits = Object.values(r.audits).filter(a => a.score !== null && a.score < 1 && a.weight > 0).sort((a, b) => (a.score - b.score)).slice(0, 10);
        audits.forEach(a => {
            out += `- ${a.title} (${Math.round(a.score * 100)})\n  ${a.displayValue || ''}\n`;
        });

        fs.writeFileSync('lh-prod-summary.txt', out);
        console.log("Done. Results saved to lh-prod-summary.txt");
    } catch (e) {
        console.error("Error during Lighthouse run:", e);
    }

    // Kill server
    try {
        process.kill(-server.pid);
    } catch (e) {
        server.kill();
    }
    process.exit(0);
}, 12000);
