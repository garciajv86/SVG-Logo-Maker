// TODO: Include packages needed for this application
const fs = require("fs");

// ? const {readFile, writeFile } = require('fs/promises');
//? const fetch = require("node-fetch");

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) => {
    err ? console.error(err) : console.log(`File ${fileName} has been saved!`);
  });
}

module.exports = writeToFile;