/*
=============================================
; Title: baumann-exercise-1.4.js
; Author: Reva Baumann
; Date: 18 April 2019
; Modified by: Reva Baumann
; Description: Duck Typing
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 1.4
  21 April 2019
  
   Car added to the racetrack!
   Truck added to the racetrack!
   Jeep added to the racetrack!
   -- The following vehicles have been added to the racetrack --
   Truck: Celica
   Car: F150
   Jeep: Wrangler


*/

// lists details of formatted header, including first name, last name and assignment
const header = require('./baumann-header.js');
console.log(header.display("Reva", "Baumann", "Exercise 1.4"));

// Start Program

// Display details of Car
function Car(model)
{
    this.model = model
}
Car.prototype.start = function()
{
    console.log("Car added to the racetrack!")
}

// Display details of Truck
function Truck(model, year)
{
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function()
{
    console.log("Truck added to the racetrack!")
}

// Display details of Jeep
function Jeep (model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function()
{
    console.log("Jeep added to the racetrack!");
}

var racetrack = [];

function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);
}

// List details of each automobile
var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018");
var wrangler = new Jeep("Wrangler", "2016", "White");

console.log("");

// Call the driveIt function for each declared vehicle
driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);

// Call the console log function to format the output
console.log('\n-- The following vehicles have been added to the racetrack --');
for (var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program