// TODO: Write code to define and export the Employee class
// const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;

// employee = new Employee('Gus', 36, 'gus@companyX.com')
// employee = new Employee(EmployeeName, EmployeeID, EmployeeEmail);

// printInfo() {
//     for (const key in this) {
//         console.log(`${key}: ${this[key]}`);
//     }
// }

// employee.printInfo();