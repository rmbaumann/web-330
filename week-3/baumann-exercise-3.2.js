 /*
=============================================
; Title: baumann-exercise-3.2.js
; Author: Reva Baumann
; Date: 06 May 2019
; Modified by: Reva Baumann
; Description: Use factory pattern to create pattern with the notion of objects
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 3.2
  29 April 2019
  Expected output
   Oracle {
    username: 'admin',
    password: 'password',
    server: 'localhost:4000',
    version: '10.0'
 }

 Informix {
    username: 'admin',
    password: 'password',
    server: 'localhost:7000'
 }

*/

// Start Program

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 3.2"));
console.log("") // Line Break

// Declare properties for the class that will function as usernames, passwords, servers, version
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql (properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle (properties) {
    this.username = properties.username || 'dianaprince';
    this.password = properties.password || 'lassooftruth';
    this.server = properties.server || 'localhost:4000';
    this.version = properties.version || '10.0';
}

function Informix(properties) {
    this.username = properties.username || 'dianap';
    this.password = properties.password || 'invisiblejet';
    this.server = properties.server || 'localhost:7000';
}

function DatabaseFactory() {}

// Use a variety of if functions to return the cooresponding database
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql;
    }

    if (properties.databaseType === 'Oracle') {
      this.databaseClass = Oracle;
    }

    if (properties.databaseType === 'Informix') {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};


// Declare a postgres database by calling the createDatabase method of the factory and passing in the properties
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

// Declare a mySql database by calling the createDatabase method of the factory and passing in the properties
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

// Declare a oracle database by calling the createDatabase method of the factory and passing in the properties
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

// Declare a informix database by calling the createDatabase method of the factory and passing in the properties
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

// Call the console.log function to output the results for Oracle and Informix
console.log(oracle);
console.log(informix);

// end program
