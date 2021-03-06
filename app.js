const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questions = [
    {
        type: "list",
        choices: ['Manager', 'Engineer', 'Intern', "I've finished adding my team"],
        name: "EmployeeRole",
        message: "What type of employee would you like to add?"
    },
    {
        type: "input",
        name: "EmployeeName",
        message: "Please enter your employee's name (or hit enter if you have no more to add)"
    },
    {
        type: "input",
        name: "EmployeeID",
        message: "Please enter your employee's ID number (or hit enter if you have no more to add)"
    },
    {
        type: "input",
        name: "EmployeeEmail",
        message: "Please enter your employee's email address (or hit enter if you have no more to add)"
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "Please enter your employee's office number",
        when: (answers) => {
            if (answers.EmployeeRole == "Manager")
                return true
            else return false
        }
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please enter your employee's GitHub profile",
        when: (answers) => {
            if (answers.EmployeeRole == "Engineer")
                return true
            else return false
        }
    },
    {
        type: "input",
        name: "School",
        message: "Please enter your intern's School",
        when: (answers) => {
            if (answers.EmployeeRole == "Intern")
                return true
            else return false
        }
    }
]

function askUser() {
    inquirer.prompt(questions).then((answers) => {
        const EmployeeRole = answers.EmployeeRole;
        const EmployeeName = answers.EmployeeName;
        const EmployeeID = answers.EmployeeID;
        const EmployeeEmail = answers.EmployeeEmail;
        const School = answers.School;
        const GitHub = answers.GitHub;
        const OfficeNumber = answers.OfficeNumber;
        if (EmployeeRole == 'Manager') {
            const manager = new Manager(EmployeeName, EmployeeID, EmployeeEmail, OfficeNumber);
            team.push(manager);
            console.log(team);
            askUser()
        }
        else if (EmployeeRole == 'Engineer') {
            const engineer = new Engineer(EmployeeName, EmployeeID, EmployeeEmail, GitHub);
            team.push(engineer);
            console.log(team);
            askUser()
        }
        else if (EmployeeRole == 'Intern') {
            const intern = new Intern(EmployeeName, EmployeeID, EmployeeEmail, School);
            team.push(intern);
            console.log(team);
            askUser()
        }

        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!

        else if (EmployeeRole == "I've finished adding my team") {
            writeFile();
        }


        // After you have your html, you're now ready to create an HTML file using the HTML
        // returned from the `render` function. Now write it to a file named `team.html` in the
        // `output` folder. You can use the variable `outputPath` above target this location.
        // Hint: you may need to check if the `output` folder exists and create it if it
        // does not.


    });
}
function writeFile() {
    const HTML = render(team);
    console.log(HTML);
    fs.writeFileSync("./outputs/team.html", HTML)
}

askUser()
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
