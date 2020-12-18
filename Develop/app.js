const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// array of questions for user
const managerQuestions = [
    {
        type: "list",
        name: "managerCheck",
        message: "Are you the manager?",
        choices: ["Yes", "No"],
        validate: function (response) {
            if (response == "No") {
                return console.log("Please have the manager fill out employee information.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter your name.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid email adress.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is your work ID?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid ID number.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter your office number.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "employeeCheck",
        message: "Would you like to add additional employees to your team?",
        choices: ["Engineer!", "Intern!", "No thanks!"],
    }];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter your name.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid email adress.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is their work ID?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid ID number.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is their GitHub username?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid GitHub username.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "employeeCheck",
        message: "Would you like to add another employee to your team?",
        choices: ["Engineer!", "Intern!", "No thanks!"],
    }];
    
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter your name.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid email adress.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is their work ID?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid ID number.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Where do they go to school?",
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Please enter a valid school name.");
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "employeeCheck",
        message: "Would you like to add another employee to your team?",
        choices: ["Engineer!", "Intern!", "No thanks!"],
        validate: function (response) {
            if (response != "Engineer!" || response != "Intern!" || response != "No thanks!") {
                return console.log("Please select one of the options.");
            }
            else {
                return true;
            }
        }
    }];

const team = [];

async function engineerInfo () {
    inquirer.prompt(engineerQuestions)
    .then (answers => {
        const newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(newEmployee);
        if (answers.employeeCheck == "Engineer!") {
            engineerInfo();
            }
        if (answers.employeeCheck == "Intern!") {
            internInfo();
        }
        if (answers.employeeCheck == "No thanks!") {
            console.log(team)
            const HTML = render(team);
            fs.writeFile(outputPath, HTML, (err) => err ? console.error(err) : console.log("Your Employee Summary has been successfully created!"));
        }
    })
    .catch(err => {
        console.log(err);
    });
}

async function internInfo () {
    inquirer.prompt(internQuestions)
    .then (answers => {
        const newEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(newEmployee);
        
        if (answers.employeeCheck == "Engineer!") {
            engineerInfo();
            }
        if (answers.employeeCheck == "Intern!") {
            internInfo();
        }
        if (answers.employeeCheck == "No thanks!") {
            console.log(team)
            const HTML = render(team);
            fs.writeFile(outputPath, HTML, (err) => err ? console.error(err) : console.log("Your Employee Summary has been successfully created!"));
        }
    })
    .catch(err => {
        console.log(err);
    });
}

async function employeeInfo() {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        const newEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(newEmployee);

        console.log(answers.employeeCheck);

        if (answers.employeeCheck == "Engineer!") {
            engineerInfo();
        }
        if (answers.employeeCheck == "Intern!") {
            internInfo();
        }
        if (answers.employeeCheck == "No thanks!") {
            console.log(team)
            const HTML = render(team);
            fs.writeFile(outputPath, HTML, (err) => err ? console.error(err) : console.log("Your Employee Summary has been successfully created!"));
        }  
    })
    .catch(err => {
        console.log(err);
    });
}

employeeInfo();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
