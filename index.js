var name = "Baggins";
(function() {
  console.log("Original name was " + name);
  var name = "underhill";
  console.log("new name is " + name);
})();
console.log(name1);
var name1 = "love";

console.log(true + 0);

b = [1, 2, 3, 4, 5];
a = b.slice(1, 2); //returns the selected elements in an array, as a new array object
console.log(a);
console.log(b);

b1 = [1, 2, 3, 4, 5];
a1 = b1.splice(1, 9); // splice will return removed items form array, it changes the original array.
console.log(a1);
console.log(b1);

/*
function createCounter() {
  let counter = 0;
  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example incremnt", c1, c2, c3);
*/

// the closure is the colleaction of all the variable in scope at the time of creation of the function.
// when a function return the function that is when the concept of closuures become relevant.The returned function has access to variables that are not in global scope, byt they solely exist in closurre
