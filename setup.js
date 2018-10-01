const fs = require('fs');
const path = require('path');

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data);

function addDependencies() {
  const packageJson = require('./package.json');
  const additionalDependencies = require('./dependencies');
  Object.assign(packageJson.devDependencies, additionalDependencies.devDependencies);
  Object.assign(packageJson.dependencies, additionalDependencies.dependencies);
  writeFile('package.json', JSON.stringify(packageJson, null, 2));
}

function setup() {
  console.log('🔄 Setting up...');
  addDependencies();

  deleteFile('.flowconfig');
  deleteFile('App.js');
  deleteFile('setup.js');
  deleteFile('dependencies.json');

  console.log(`✅ Setup completed!`);
}

setup();