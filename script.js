import fs from 'fs';
import path from 'path';

function getFiles(dir) {
    const files = fs.readdirSync(dir);
    let result = [];
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            result = result.concat(getFiles(fullPath));
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            result.push(fullPath);
        }
    }
    return result;
}

const files = getFiles('src');
const imports = new Set();
for (const f of files) {
    const content = fs.readFileSync(f, 'utf-8');
    const matches = content.matchAll(/from ['"]([^'"]+)['"]/g);
    for (const match of matches) {
        let pkg = match[1];
        if (!pkg.startsWith('.') && !pkg.startsWith('@/') && !pkg.startsWith('src/')) {
            if (pkg.startsWith('@')) {
                pkg = pkg.split('/').slice(0,2).join('/');
            } else {
                pkg = pkg.split('/')[0];
            }
            imports.add(pkg);
        }
    }
}
fs.writeFileSync('deps8.txt', 'EXTERNALS=' + [...imports].sort().join(','), 'utf-8');
