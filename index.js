// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');

const genMark = require('./utils/generateMarkdown');

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
            "Academic Free License",
            "Artistic License",
            "Creative Commons",
            "MIT",
            "Open Software License",
            "None",
        ]

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
