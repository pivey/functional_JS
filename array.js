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

const deepCopy = JSON.parse(JSON.stringify(numObj));

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

// ? removing duplicates from arrays.

const devTeam = [
  'harry',
  'henry',
  'jenny',
  'kate',
  'james',
  'james',
  'janice',
  'kurt',
  'will',
  'will',
];

const interns = ['joe', 'katy', 'megan', 'harry', 'will'];

// * 1. make a unique set.

const devSet = [...new Set(devTeam)];
// [ 'harry','henry','jenny','kate','janice','kurt','will']

// * 2. using array.filter.

const devTeamFilter = devTeam.filter((x, i) => devTeam.indexOf(x) === i);
const uniqueArray = devTeam.filter((e, index, dev) => dev.indexOf(e) === index);
// ! you can also pass in the array as a parameter like above
// [ 'harry','henry','jenny','kate','janice','kurt','will']

// * check one array against another

const teamCheck = interns.filter(x => !devTeam.includes(x));
// [ 'joe', 'katy', 'megan' ]

// * remove array item function
// ! the function will splice the element from the array if it exists withing the array.

function removeSplice(array, element) {
  const index = array.indexOf(element);
  index !== -1 ? array.splice(index, 1) : null;
}

function removeFilter(array, element) {
  return array.filter(el => el !== element);
}

// * 3. using forEach

function clearDuplicates(names) {
  const unique = {};
  names.forEach(function(i) {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

// ? manipulate endpoint data.

const data = [
  {
    mood: 'happy',
    fish: 'robin',
    colours: ['blue', 'green'],
  },
  {
    mood: 'tired',
    fish: 'panther',
    colours: ['green', 'black', 'orange', 'blue'],
  },
  {
    mood: 'sad',
    fish: 'goldfish',
    colours: ['green', 'red'],
  },
];

const colours = data.map(x => x.colours);

const merge = colours.reduce((a, b) => a.concat(b));
