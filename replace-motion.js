const fs = require('fs');
const path = require('path');

const dir = 'src/components/sections';

fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // Replace import { motion, Variants } from "framer-motion" with import { m, Variants } from "framer-motion"
    content = content.replace(/import\s+\{([^}]*?)motion([^}]*?)\}\s+from\s+["']framer-motion["']/g, (match, p1, p2) => {
        return `import {${p1}m${p2}} from "framer-motion"`;
    });

    // Replace <motion.div with <m.div
    content = content.replace(/<motion\./g, '<m.');
    content = content.replace(/<\/motion\./g, '</m.');

    fs.writeFileSync(p, content, 'utf8');
});

console.log('Done replacement');
