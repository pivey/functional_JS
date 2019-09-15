/* eslint-disable no-param-reassign */
// ? Recursion
// * recursion is the process of taking a big problem and sub-dividing it into multiple,
// * smaller instances of the same problem.

// * writing a function that calls itself

function recursiveCapitalize(str) {
  if (str.length === 1) {
    return str.toUpperCase();
  }
  str = str.split(''); // gives us ['a', 'b', 'c']
  const firstLetter = str.shift(); // first letter = 'a'
  // str is now ['b', 'c']
  return firstLetter.toUpperCase() + recursiveCapitalize(str.join(''));
}
recursiveCapitalize('abc'); // returns 'ABC'

// ? ******************************

function recursiveReverse(string) {
  if (string === '') {
    return '';
  }
  console.log(string.substr(1));
  console.log(string.charAt(0));
  return recursiveReverse(string.substr(1)) + string.charAt(0);
}

// console.log(recursiveReverse('shaggy')); // * yggahs
