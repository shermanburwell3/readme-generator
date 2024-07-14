// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        //Project title
    {

        type: "text",
        message: "What is the #Title of your project?",
        name: "title",

    },
    //Description
    {

        type: "text",
        message: "What is the ##Description for your project?",
        name: "description",

    },
    //Steps for Installation
    {

        type: "text",
        message: "Please explain ##How-to-Install your application.",
        name: "howToInstall",

    },
    //Usage
    {

        type: "text",
        message: "Please explain proper ##Usage of your application.",
        name: "usage",

    },
    //Credits
    {

        type: "text",
        message: "Who is to receive ##Credit for this work so far?",
        name: "credits",

    },
    //License
    {

        type: "list",
        message: "Please select a license type:",
        name: "license",
        choices: [
            "Apache 2.0",
            "Artistic License",
            "Creative Commons",
            "MIT",
            "The Unlicense",
            "None",
        ],

    },
    //Features
    {

        type: "text",
        message: "Please expalin the ##Features of your application.",
        name: 'features',

    },
    //Contribution Guidelines
    {

        type: "text",
        message: "Please provide any ##Contribution Guidlines for your application.",
        name: 'contributionGuidelines',

    },
    //Questions and Contact Info
    {

        type: "text",
        message: "Please provide any ##Contact information.",
        name: 'contact',

    },
    {

        type: "text",
        message: "Any instructions for ##Testing?",
        name: "test",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function() { console.log("Error has occured!")});
}

// TODO: Create a function to initialize app
function init() {
    console.log("Any section you wish to leave out for the moment, leave the answer blank!");
    inq.prompt(questions).then((response) => writeToFile("newReadme.md", generateMarkdown(response)));
}

// Function call to initialize app
init();
