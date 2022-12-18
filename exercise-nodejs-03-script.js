// Exercise 3 - Create and use CommonJS modules

// Create a script that uses module.exports to export a function.
// Create another script that uses require() to import the function and then calls it.

const outputMessage = require("./exercise-nodejs-03-output-message");

outputMessage("Hey there!");
