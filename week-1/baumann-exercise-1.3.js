/*
=============================================
; Title: baumann-exercise-1.3.js
; Author: Reva Baumann
; Date: 18 April 2019
; Modified by: Reva Baumann
; Description: Create a list about cell phones with varying properties
;============================================
*/

/*
Expected output:
  Reva Baumann
  Assignment 5.4
  10 March 2019

  
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 1.3"));

// Start Program

function Cellphone (manufacturer) {
    this.manufacturer = Apple;
    this.model = "XR";
    this.color = "Yellow";
    this.price = $99;

    this.getDetails = function() {
        return (
            this.manufacturer + 
            " Apple" +
            this.model + 
            " Model" +
            this.color +
            "yellow" + 
            this.price +
            "99"
        )
    }
    
}

const phone = new Phone(99);


console.log(Cellphone.getDetails)