// ? Array constructor

//* create an array for you
const numArr = new Array(1, 2, 3, 4, 5);

//* create an array with 10 empty slots
const lenArr = new Array(2);

// lenArr[3] = 'hi';
//*  [ <3 empty items>, 'hi', <6 empty items> ]

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

let string = 'hey you';

string = [...string];
//* [ 'h', 'e', 'y', ' ', 'y', 'o', 'u' ]

const objArr = Object.keys(obj).map(key => [key, obj[key]]);
//* [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ];

const obj2 = Object.entries(obj);
//* [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ];

const Arr2 = Array.of(5, 3, 6);

//* practically the same as new Array() apart from if you insert a single
//* integer it will make an array from just that number

const entries = [...Arr2.entries()];
//* [ [ '0', 5 ], [ '1', 3 ], [ '2', 6 ] ]

console.log([...Arr2.entries()]);

// ? ************** Array / object cloning *********************

const Arr4 = Arr2;
//* assigning a new const to an existing array like this copies the reference in memory so changing this array will change the original array.

//! methods to shallow copy an array
//* this are all new reference points for the same array and are now extensible and mutable without affecting Arr2.
const slice = Arr2.slice();
const concat = Arr2.concat();
const ArrFrom = Array.from(Arr2);
const destruct = [...Arr2];

console.log(
  Arr2 === slice,
  Arr2 === concat,
  Arr2 === ArrFrom,
  Arr2 === destruct
); //! false
//* creates a new reference in memory so you can't affect the original array.

const numObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const numObj2 = numObj; //! true - same reference

const copyObj = input => {
  const newObj = {};

  for (const key in input) {
    newObj[key] = input[key];
  }
  return newObj;
};

const copied = copyObj(numObj);
console.log(numObj === copied); //! false - new reference

const clone = Object.assign({}, numObj);
console.log(numObj === clone); //! false - new reference
//* this can be used to copy object methods while the parse/stringify method cannot do this. 

// ? to deep copy an object the same as an array:

const deepClone = JSON.parse(JSON.stringify(numObj));

// ? ********* Deep copying nested arrays ***********

const nest = [1, 2, 4, 5, 78, [3, 8, 3, 67, 82, 5]];
const deepNest = JSON.parse(JSON.stringify(nest));

//! this mehtod is not very effective with anything other than numbers, strings and booleans
//! if the array contains a function the result in the copied array will be null.

// ? ************* deepclone function *****************

//* this can also be done using the lodash library.
function deepClone(arr) {
  const output = Array.isArray(arr) ? [] : {};
  for (const i in arr) {
    const value = arr[i];
    output[i] =
      value !== null && typeof value === 'object' ? deepClone(value) : value;
  }
  return output;
}

// ? ************* range function **********************
//* count up to or down from a number by a set increment.

function range(start, end, step = 1) {
  const allNumbers = [start, end, step].every(Number.isFinite);

  if (!allNumbers) {
    // if not finite numbers
    throw new TypeError('range() expects only finite numbers as arguments.');
  }

  if (step <= 0) {
    throw new Error('step must be a number greater than 0.');
  }

  // if the start point is greater than the end point modify the step for decrementing instead of incrementing.
  if (start > end) {
    step = -step;
  }

  // Determine the length of the array to be returned.
  // The length is incremented by 1 after Math.floor().
  // This ensures that the end number is listed if it falls within the range.
  const length = Math.floor(Math.abs((end - start) / step)) + 1;

  // using Array.from() with a mapping function.
  // Finally, return the new array.
  return Array.from(Array(length), (x, index) => start + index * step);
}

// console.log(range(1, 20, 1));
