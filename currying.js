// ? functional programming - currying.

//* a curried function is one that takes multiple arguments and returns a series of functions - one at a time that eventually resolve to a value. 
//* if given 2 arguments it will run the function once with the first, once with the second and then return.
//* The last function in the chain returns the result of applying the function to all of its arguments
//! All curried functions return partial applications, but not all partial applications are the result of curried functions.
//* currying minimizes the number of changes to a functions state - ie 'side effects'
//* this is done by using immutable data and pure (no side effects) functions.


const subtract = a => b => a - b;

console.log(subtract(6)(10));

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];

const plusIndex = n => y =>
  typeof n === 'object' && typeof y === 'object' ? n.concat(y) : n + y;

console.log(plusIndex(arr2)(arr1));
