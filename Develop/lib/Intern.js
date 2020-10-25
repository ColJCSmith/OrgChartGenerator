// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;

// const intern = new Intern('Jenni', 22, 'jenni@companyX.com', 'USYD');

// printInfo() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`email: ${this.email}`);
//     console.log(`School: ${this.school}`);
// }
// intern.printInfo();