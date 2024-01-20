/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name:_Daniel Dadzie Appiah_   Student ID:_156801227    Date: _20th January, 2024_
*
************************************************************************************/ 



console.log('WEB700 - Web Server Simulator');

'use strict';

// Predefined arrays
let serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
let serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
let serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Daniel Dadzie Appiah",
    "Daniel Dadzie Appiah: ddappiah@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// The httpRequest function
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manual Testing
console.log(httpRequest("GET", "/")); // Should return "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // Should return "200: This assignment was prepared by Daniel Dadzie Appiah"
console.log(httpRequest("POST", "/login")); // Should return "200: User Logged In"
console.log(httpRequest("Get", "/panel")); // Should return "200: Main Panel"
console.log(httpRequest("POST", "/")); // Should return "404 error: Unable to process POST request for / "


// Additional arrays for testing
let testVerbs = ["GET", "POST", "PUT"];
let testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/testPath1", "/testPath2"];

// Utility function to generate random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Function to automate tests
function automateTests() {
    function randomRequest() {
        let randomVerb = testVerbs[getRandomInt(testVerbs.length)];
        let randomPath = testPaths[getRandomInt(testPaths.length)];
        let response = httpRequest(randomVerb, randomPath);
        console.log(`Request: ${randomVerb} ${randomPath} - Response: ${response}`);
    }

    setInterval(randomRequest, 1000); // Calls randomRequest every second or 1000 milliseconds
}

// Running automated tests
automateTests();
