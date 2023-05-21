// TODO: Include packages needed for this file
const inquirer = require("inquirer");
const questions = require("./questions");
const generateHTML = require("./generateHTML");
const writeToFile = require("./writeToFile");

// TODO: Create a function to ask the questions
function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    let html = generateHTML(answers);
    writeToFile("./examples/sample-html.html", html);
  });
}

module.exports = askQuestions;
