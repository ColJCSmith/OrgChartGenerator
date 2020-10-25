// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
// const manager = new Manager('Greg', 38, 'Greg@companyX.com', 304);

// printInfo() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`email: ${this.email}`);
//     console.log(`Office #: ${this.officeNumber}`);
// }

// manager.printInfo();

module.exports = Manager;