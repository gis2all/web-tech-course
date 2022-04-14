// Javascript Bind
// https://www.w3schools.com/js/js_function_bind.asp

this.car = "Honda Civic w/ Ugly Spoiler";

// Alex Browns
var marksGarage = {
  car: "Aston Martin",
  getCar: function() {
    return this.car;
  }
}

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;
console.log(storeGetCarForLater());


var theRealGetCar = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCar());

