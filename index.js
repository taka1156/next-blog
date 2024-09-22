const dir = ['atoms', 'molecules', 'organisms'];

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (path.extname(file) === '.tsx') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const directoryPath = 'src/components';

const tsxFiles = findTsxFiles(directoryPath).filter(
  (text) => text.indexOf('.test') === -1
);

tsxFiles.map((pathname) => {
  const paths = pathname.split('/');
  const filename = paths[paths.length - 1].replace('.tsx', '');
  const componentPath = paths[paths.length - 3];

  exec(`yarn plop stories ${componentPath} ${filename}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.log(`${stderr}`);
      return;
    }

    console.log(`${componentPath}/${filename}`);
    console.log('out!');
  });
});
