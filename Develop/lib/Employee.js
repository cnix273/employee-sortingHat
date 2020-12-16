// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, index, email, index) {
        this.name = name;
        this.id = index + 1;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return "Employee";
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}

module.exports = Employee;