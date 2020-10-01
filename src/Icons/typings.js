const fs = require('fs');
const path = require('path');
const readline = require('readline');

const typesFileLines = [
  "import {FC, SVGAttributes} from 'react';",
  '',
  'interface SVGComponent extends FC<SVGAttributes<SVGElement>> {}',
  '',
];

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, './jsx/index.js')),
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  const iconName = line.match(/'\.\/(.+)';$/)[1];
  typesFileLines.push(`export const ${iconName}: SVGComponent;`);
});

rl.on('close', () => {
  fs.writeFileSync(path.join(__dirname, './jsx/index.d.ts'), typesFileLines.join('\n'));
});
