const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');
const words = content.split(' ').length;

const ReactwordCount = content.match(/react/gi ?? []).length;

console.log('Palabras', words);
console.log('Palabras React', ReactwordCount);