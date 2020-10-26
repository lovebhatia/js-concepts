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

// the closure is the colleaction of all the variable in scope at the time of creation of the function.
// when a function return the function that is when the concept of closuures become relevant.The returned function has access to variables that are not in global scope, byt they solely exist in closurre
