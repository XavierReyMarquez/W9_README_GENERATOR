// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = (data = []);
inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "Description",
      message: "Give at description",
    },
    {
      type: "input",
      name: "Installation",
      message: "What where the installations intructions?",
    },
    {
      type: "input",
      name: "Usage",
      message: "What is the usage?",
    },
    {
      type: "input",
      name: "Contributing",
      message: "Who Contributed?",
    },
    {
      type: "input",
      name: "Tests",
      message: "How do you test it?",
    },
    {
      type: "input",
      name: "license",
      message: "what license?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is your email?",
    },
  ])
  .then((answer) => {
    console.log(answer);
    const writeToFile = generatetxt(answer);
  });

console.log(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
