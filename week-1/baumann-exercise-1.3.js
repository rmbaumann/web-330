/*
=============================================
; Title: baumann-exercise-1.3.js
; Author: Reva Baumann
; Date: 18 April 2019
; Modified by: Reva Baumann
; Description: Create details about a cellphone
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 1.3
  21 April 2019
  Manufacturer: Apple
  Model: iPhone XR
  Color: Yellow
  Price: 99.99
*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 1.3"));

// Start Program

// Declare an instance of the Cell Phone
let myPhone = new CellPhone("Apple", "iPhone XR", "Yellow", "99")

// Display details of Cellphone
function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    // get price
    this.getPrice = function()
    {
        return this.price;
    }

    this.getModel = function()
    {
        return this.model;
    }

    this.getDetails = function()
    {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
        "\nColor: " + this.color + "\nPrice: " + this.getPrice(); 
    }
}


// Show details of cellphone information
var cellPhone = new CellPhone("Apple", "iPhone XR", "Yellow", "99.99");

//output
console.log(cellPhone.getDetails())

// end program
