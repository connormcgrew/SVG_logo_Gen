const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

class Svg{
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render();
    }

}


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 charaters',

    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter text color or hex value',

    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Enter shape color or hex value',

    },

];

function writeToFile(fileName, data){
    console.log("Writing ["+ data + "] to file [" + fileName + "]");
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("SVG file generated");
    });
}

async function init(){
    console.log("Starting init");
    var svgString = '';
    var svgFile = './dist/logo.svg';

    const answers = await inquirer.prompt(questions);

    var userText = "";
    if(answers.text.length > 0 && answers.text.length < 4){
        userText = answers.text
    }else{
        console.log("Invalid text length");
        return;
    }

    userText= answers['text']
    console.log("User text: " + text);

    userTextColor = answers['text-color'];
    console.log("User text color: " + userTextColor);

    userShapeColor = answers['shape-color'];
    console.log("User shape color: " + userShapeColor);

    userShape = answers['shape'];
    console.log("User shape: " + userShape);




