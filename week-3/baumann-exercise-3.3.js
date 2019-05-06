 /*
=============================================
; Title: baumann-exercise-3.3.js
; Author: Reva Baumann
; Date: 06 May 2019
; Modified by: Reva Baumann
; Description: The Singleton Pattern
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 3.3
  29 April 2019
  Expected output
  Same database instance? true

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 3.3"));
console.log("") // Line Break

// Variable declaration and assignment, declare the class, return instance
var DatabaseSingleton = (function() {
      var instance;
      function createInstance() {
          var postgresDatabase = new Object("Database instance initialized!");
          return postgresDatabase;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
  }
})();

// Calling Singleton Database Class
function databaseSingletonTest() {
    let sqlServer = DatabaseSingleton.getInstance();
    let mySql = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", mySql === sqlServer);
}

// test database
databaseSingletonTest();
