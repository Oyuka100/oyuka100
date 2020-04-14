const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer
  .prompt([
    {
      type: "list",
      choices: [
        {
          key: "http://.....",
          value: "MIT",
        },
        {
          key: "http://.....",
          value: "ICS",
        },
      ],
      name: "license",
      message: "What is the license for your project?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project name? ",
    },
    {
      type: "input",
      name: "githubName",
      message: "What is your github name?",
    },
    {
      type: "input",
      name: "tableContents",
      message: "What is your table of contents?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do we install?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do we use this project?",
    },

    {
        type: "input",
        name: "contribute",
        message: "Contributing",
    },

    {
        type: "input",
        name: "test",
        message: "test it"


    }
  ])
  .then(async function (data) {
    let url = "https://api.github.com/users/" + data.githubName;

    const response = await axios.get(url);

    let template = `https://api.github.com/users/" + ${data.githubName}
        ![Image of user] )${response.data.avatar_url})
        Email: ${response.data.email}
        Title: ${data.title}
        Table of content: ${data.tableContents}
        License: ${data.license}
        Installation: ${data.installation}
        Usage: ${data.usage}
        Contributing: ${data.contribute}
        Test: ${data.test}
        
        
        ${data.usage}`;

    fs.writeFile("readMe.md", template, function (err) {
      if (err) {
        throw err;
      }

      console.log("ReadMe.md file generated successfully.");
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

// Functional, deployed application.

// GitHub repository with a unique name and a README describing project.

// The generated README includes a bio image from the user's GitHub profile.

// The generated README includes the user's email.

// The generated README includes the following sections:

// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
