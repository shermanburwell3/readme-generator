// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');

const genMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        //Project title
    {

        type: "text",
        message: "What is the #Title of your project",
        name: title,

    },
    //Description
    {

        type: "text",
        message: "What is the ##Description for your project?",
        name: description,

    },

    


    

    
    //Steps for Installation


    //Usage


    //Credits


    //License


    //Features


    //Contribution Guidelines


    //Questions and Contact Info


    //License
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
