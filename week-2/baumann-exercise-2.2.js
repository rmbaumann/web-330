/*
=============================================
; Title: baumann-exercise-2.2.js
; Author: Reva Baumann
; Date: 29 April 2019
; Modified by: Reva Baumann
; Description: Use Prototypes to create Wonder Woman's true identity and details
;============================================
*/

/*
Expected output:
  Reva Baumann
  Exercise 2.2
  29 April 2019
  Expected output

  The person's full name is 'Diana Prince'
  The person's age is 29'

*/


// Start Program

var person = {
  getAge: function ()
  {
    return this.age;
  }
};

var diana = Object.create(person, {
  "age":
  {
    "value": "29"
  },
  "fullname":
  {
    "value": "Diana Prince"
  }
});

diana.getAge();

console.log("The person's full name is: '%s'", diana.fullname);
console.log("The person's age is '%s'", diana.age);
