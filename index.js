//Import the data for the classes
var Engineer = require("./lib/Engineer")
var Intern = require("./lib/Intern")
var Manager = require("./lib/Manager")
var inquirer = require("inquirer")
var fs = require("fs")
//Varibles for the questions
var managers = []
var engineers = []
var interns = []
var end = `
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
 </body>
 </html>`
var questions = [{
    type: "input",
    message: "What is the team member's name?",
    name: "TMname"
}, {
    type: "number",
    message: "What is the team members's id number?",
    name: "TMId"
}, {
    type: "input",
    message: "What is the team member's email",
    name: "TMemail"
}]
var managerQuestion = [{
    type: "number",
    message: "What is the team member's office number?",
    name: "officeNumber"
}]
var engineerQuestion = [{
    type: "input",
    message: "What is the team member's GitHub?",
    name: "github"
}]
var internQuestion = [{
    type: "input",
    message: "What is the team member's school",
    name: "school"
}]
var finalQuestion = [{
    type: "list",
    message: "Add engineer, add intern, or finish?",
    name: "choice",
    choices: ["Add engineer", "Add intern", "Finish"]
}]
//functions to ask questions
inquirer.prompt(questions).then((data) => { mQuestion(data, managerQuestion) })
function mQuestion(data1, question) {
    inquirer.prompt(question).then((data) => {
        managers.push(new Manager(data1.TMname, data1.TMId, data1.TMemail, data.officeNumber))
        final(finalQuestion)
    })
}
function final(question) {
    inquirer.prompt(question).then((data) => {
        if (data.choice === "Add engineer") {
            inquirer.prompt(questions).then((data) => {
                eQuestion(data, engineerQuestion)
            })
        } else if (data.choice === "Add intern") {
            inquirer.prompt(questions).then((data) => {
                iQuestion(data, internQuestion)
            })
        } else if (data.choice === "Finish") {
            fs.writeFile("./dist/index.html", writeData(), (err) => err ? console.log(err) : console.log("Added successfully"))
            writeManagers(managers)
            writeEngineers(engineers)
            writeInterns(interns)
        }
    })
}
function eQuestion(data1, question) {
    inquirer.prompt(question).then((data) => {
        engineers.push(new Engineer(data1.TMname, data1.TMId, data1.TMemail, data.github))
        final(finalQuestion)
    })
}
function iQuestion(data1, question) {
    inquirer.prompt(question).then((data) => {
        interns.push(new Intern(data1.TMname, data1.TMId, data1.TMemail, data.school))
        final(finalQuestion)
    })
}
//functions to write the data to the index.html file
function writeData() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>My team</title>
    </head>
    <body>
        <header class="position-absolute top-0 start-50 bg-primary d-block p-2">My team</header>`
}
function writeManagers(array) {
    array.forEach(element => {
        var content = `<div class = 'card' style="width: 18rem">
                    <div class ='card-body'>
                        <h5 class = 'card-title'>${element.getName()}, ${element.getRole()}</h5>
                        <p class = 'card-text'> Id: ${element.getId()}</p>
                        <p class = 'card-text'> <a href="mailto:${element.getEmail()}">Email: ${element.getEmail()}</a></p>
                        <p class = 'card-text'>Office:${element.officeNumber}</p>
                    </div>
                </div> \n`
        fs.appendFile("./dist/index.html", content, (err) => err ? console.log(err) : console.log("Successfully added Managers"))
    });

}
function writeEngineers(array) {
    array.forEach(element => {
        var content = `<div class = 'card' style="width: 18rem">
                    <div class ='card-body'>
                        <h5 class = 'card-title'>${element.getName()}, ${element.getRole()}</h5>
                        <p class = 'card-text'> Id: ${element.getId()}</p>
                        <p class = 'card-text'> <a href="mailto:${element.getEmail()}">Email: ${element.getEmail()}</a></p>
                        <p class = 'card-text'><a href="https://github.com/${element.getGithub()}"> GitHub: ${element.getGithub()}</a></p>
                    </div>
                </div> \n`
        fs.appendFile("./dist/index.html", content, (err) => err ? console.log(err) : console.log("Successfully added Engineers"))
    });
}
function writeInterns(array) {
    array.forEach(element => {
        var content = `<div class = 'card' style="width: 18rem">
                    <div class ='card-body'>
                        <h5 class = 'card-title'>${element.getName()}, ${element.getRole()}</h5>
                        <p class = 'card-text'> Id: ${element.getId()}</p>
                        <p class = 'card-text'> <a href="mailto:${element.getEmail()}">Email: ${element.getEmail()}</a></p>
                        <p class = 'card-text'>School:${element.getSchool()}</p>
                    </div>
                </div> \n`
        fs.appendFile("./dist/index.html", content, (err) => err ? console.log(err) : console.log("Successfully added Interns"))
    });
    fs.appendFile('./dist/index.html', end, (err) => err ? console.log(err) : console.log("Done!"))
}