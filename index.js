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
var end = `</div>
</div>
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
            fs.writeFile("index.html", writeData(), (err) => err ? console.log(err) : console.log("Added successfully"))
            writeManagers(managers)
            writeEngineers(engineers)
            writeInterns(interns)
            fs.appendFile('index.html', end, (err) => err ? console.log(err) : console.log("Done!"))
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
