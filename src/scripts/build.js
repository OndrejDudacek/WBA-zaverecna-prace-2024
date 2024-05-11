const fs = require("fs-extra");
const path = require("path");

const srcFolderPath = "../../src";

const keywords = ["imgs", "js", "styles", ".html"]; // ensure the names of your directories are included here

const buildFilesAndFolders = [];

const srcFiles = fs.readdirSync(srcFolderPath, { withFileTypes: true });

for (let file of srcFiles) {
  if (keywords.some((keyword) => file.name.includes(keyword))) {
    buildFilesAndFolders.push(file);
  }
}

for (let dirent of buildFilesAndFolders) {
  let file = dirent.name;
  fs.copySync(path.join(srcFolderPath, file), path.join("../../build", file));
  console.log(`Copied ${file} to build`);
}
/* 
how to copy files and folders from one dir and paste them to another usiong node js

GitHub Copilot
You can use the fs-extra module in Node.js to copy files and folders from one directory to another. Here's a step-by-step plan:
Import the fs-extra module.
Define the source and destination directories.
Use the copy function from fs-extra to copy the files and folders.
Here's the code:
    const fs = require('fs-extra');

    const srcDir = '/path/to/source/directory';
    const destDir = '/path/to/destination/directory';

    fs.copy(srcDir, destDir)
    .then(() => console.log('Files and folders copied successfully!'))
    .catch(err => console.error(err));
Please replace /path/to/source/directory and /path/to/destination/directory with your actual source and destination paths.
Note: If fs-extra is not installed, you can install it using npm by running npm install fs-extra in your terminal.
 */
