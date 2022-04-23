// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = () => {};
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Give at description",
    },
    {
      type: "input",
      name: "installation",
      message: "What where the installations intructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who Contributed?",
    },
    {
      type: "input",
      name: "tests",
      message: "How do you test it?",
    },
    {
      type: "list",
      name: "license",
      message: "what license?",
      choices: ["MIT", "BSD 2", "BSD 3", "Boost Software", "None"],
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ])
  .then((data) => {
    console.log(data);

    fs.writeFile("user.md", generateMarkdown(data), (err) => {
      err ? console.log(err) : console.log("Created ReadMe file");
    });
  });

// console.log(questions);
//  TODO: Create a function to write README file
// function writeToFile(genFile, data) {
//   fs.writeFile(genFile.md, generateMarkdown(data), (err) => {
//     err ? console.log(err) : console.log("Created ReadMe file");
//   });
// }

// // TODO: Create a function to initialize app
// function init() {
//   questions;
//   writeToFile;
// }

// Function call to initialize app
// init();
