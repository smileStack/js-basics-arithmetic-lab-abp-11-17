/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID;
newID = oldID + 1000000000;
let ageIsValid = ageIsValid();

function ageIsValid(currentAge){
  
  return Number.isInteger(currentAge);
}