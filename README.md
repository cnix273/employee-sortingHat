# Employee Sorting Hat

## Description

This application is a Node CLI that takes in information about employees and dynamically generates an HTML webpage that displays summaries for each person. It creates these summaries based on information provided by the user about themselves and their team. The user is prompted with questions to which they respond uing the command line. This input data is then used to create summaries about the employee, each summary including different date depending on if they are a Manager, Engineer, or Intern.

All employee summaries includ their Name, Role, Id, and Email. Manager summaries also include their Office Number, while Engineer summaries include their GitHub Username and Intern summaries include the School they attend/attended.

## Installation

1. Clone the repository from github to your local server. In terminal, type: "git clone https://github.com/cnix273/README-Generator".
2. Install Node.js.
3. Install the Inquirer dependency for collecting input from the user.
4. Install the Jest dependency for running the provided tests.

## Usage

**Technologies Used**
* JavaScript - Used to make the application dynamic so that input can be received from the user.
* Node.js - JavaScript runtime environment that executes JavaScript code outside a web browser.
* GitHub - Hosts the repository that can be deployed to GitHub Pages.
* HTML - Used to create templates for the HTML included for the different types of employees

Using terminal, navigate to the directory containing the app.js file. Type "node app.js" into the command line to run the application. You will be prompted with a series of questions that will be used to generate the Employee Summary HTML file.

**This video is a walkthrough of the application, showing its functioalityn**
![Video Walkthrough](https://github.com/cnix273/employee-sortingHat/blob/main/assets/Walkthrough.mp4)

## Credits

**Author:** Cameron Nix
* [LinkedIn](https://www.linkedin.com/in/cameron-nix-a74aa1109/)
* [GitHub](https://github.com/cnix273)

## Contributing

Pull requests are welcome.

To contribute to this refactor, clone this repo locally and commit your code on a separate branch.

## License

Licensed by: MIT License.
