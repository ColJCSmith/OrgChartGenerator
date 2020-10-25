// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;


// const engineer = new Engineer(EmployeeName, EmployeeID, EmployeeEmail, 'GusGus');
// const engineer = new Engineer('Gus', 36, 'gus@companyX.com', 'GusGus');

// printInfo() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`email: ${this.email}`);
//     console.log(`GitHub: ${this.github}`);
// }

// engineer.printInfo();


