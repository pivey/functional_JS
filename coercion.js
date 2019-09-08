/* eslint-disable prefer-template */
// ? coercion generally refers to the 'unexpected type casting' found in the JS language.
// ? master coercion and you can use it to your advantage to shorted your code base.

let string = '' + 14; // "14"
// * every “+” expression that involves a string will result in a string.

string = '42' - 7; // 35
string = '42' - 0; // 42
string = '42' - '9'; // 33

// * every '-' expression that involves a string will result in a number.
console.log(typeof ('70' - 0));

// ? boolean coercion
// ! if the variable being compared is not a boolean it will be coerced into one.

//* '||' operator : if the first value casts to true you get that value returned
//* Otherwise, you will always get the second one.

//* '&&' operator : if both coerce to true - you get the second value
//* If the first one casts to false then you will get it’s value returned.

function greet(name) {
  name = name || 'visitor';
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, visitor!

// ? equality
// * '===' : comparison with type.
// * JS won't cast the values to be the same type. If values are a different type then they aren't equal

// * '==' : comparison without type
// * javascript will cast the values to be the same type

// todo Simply put, == is comparison which allows coercion, === is comparison without coercion.

// ? Short curcuiting

let person = {
  name: 'Jack',
  age: 34,
};
console.log(person.job || 'unemployed');
// 'unemployed'

// * takes 'unemployed' as person.job === undefined as it doesn't exist. 'undefined' is falsy 'unemployed' is returned

var a; // undefined (falsy value)
var b = null; // null (falsy value)
var c = undefined; undefined (falsy value)
var d = 4; // number (NOT falsy)
var e = 'five'; // assigment short circuits before reaching here

var f = a || b || c || d || e; // * 'f' = 4 because it is the first truthy value in the list




