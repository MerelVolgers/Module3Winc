// Deel A:
// Dutch Sandwich recipe:
// Get a slice of bread.
// Add cheese.
// Top it with a slice of bread.

// function makeDutchSandwich (){
// console.log('Get a slice of bread');
// console.log('Add cheese');
// console.log('Top it with a slice of bread');
// }
// makeDutchSandwich()


// // DEEL B:
// // function declaration: 
// const makeSandwich = function (topping){
// console.log('Get a slice of bread');
// console.log('Add' + ' ' + topping);
// console.log('Top it with a slice of bread');
// console.log("There you go, a sandwich with" + ' '+ topping );
// };

// // calling function:
// makeSandwich('cheese');
// makeSandwich('hummus');


// //Deel C:
const calculateDiscountedPrice = function (totalAmount, discount){
  return Math.round (totalAmount-discount)
};
// console.log(calculateDiscountedPrice (50, 4));

//Deel D:
const discountValidation = function (totalAmount, discount){
  if (totalAmount > 25) {
    return Math.round (totalAmount - discount);
  } else {
    return totalAmount;
  }
};

console.log(discountValidation(50, 5));

