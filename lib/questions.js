// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "textContent",
    message:
      "What text up to 3 characters would you like to display in your logo?",
    validate: (input) => {
      if (input.length > 3) {
        return 'Please enter no more than 3 characters.';
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter the color you want for your text(color keyword or hexadecimal):",
    validate: (input) => {
      if (input.trim() === "") {
        return "Please enter a color.";
      }

      const keywordRegex = /^(\b[a-z]+\b)$/i;
      const hexRegex = /^#?([a-f\d]{3}|[a-f\d]{6})$/i;

      if (!keywordRegex.test(input) && !hexRegex.test(input)) {
        return "Please enter a valid color (keyword or hexadecimal).";
      }

      return true;
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape from the list:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the color you would like the shape to be:",
    validate: (value) => {
      const keywordRegex = /^[a-zA-Z]+$/;
      const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
      if (value.trim() === "") {
        return "Please enter a color.";
      } else if (!keywordRegex.test(value) && !hexRegex.test(value)) {
        return "Please enter a valid color keyword or hexadecimal number.";
      } else {
        return true;
      }
    },
  },
];

module.exports = questions;
