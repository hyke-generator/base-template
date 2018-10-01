const fs = require('fs');
const path = require('path');

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data);


function setup() {
  console.log('🔄 Setting up...');

  deleteFile('.flowconfig');
  deleteFile('App.js');
  deleteFile('setup.js');

  console.log(`✅ Setup completed!`);
}

setup();