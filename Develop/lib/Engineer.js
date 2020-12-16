// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(index, name, email, github) {
        super (name, index, email);
        this.role = "Engineer"
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;