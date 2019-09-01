// ? JS 'this' variable

// ! 'this' references the object that is executing the current function
// ! if 'this' is a method of an object then 'this' references that object
// ! if 'this' is a regular function then 'this' references the global object which is 'window' in browsers and 'global' in node.

// * The value 'this' is given depends on how a function is invoked

// * if 'this' is used in a function bound as an event handler  or as a method then this is set to the reference to the DOM element handler / object.

// todo The success method within the Ajax request is just a regular function, and therefore 'this 'is set to the global object, eg below
// function foo() {
//   console.log(this); // ! global object when just used inside a normal function
// }

// $('myLink').on('click', function() {
//   console.log(this); // ! points to myLink (as expected)
//   $.ajax({
//     success() {
//       console.log(this); // ! points to the global object. Huh?
//     },
//   });
// });

// * this refers the object that the method is connected to.
// myapp = {};
// myapp.foo = function() {
//   console.log(this); // ! points to myapp object
// };

// const link = document.getElementById('myId');
// link.addEventListener(
//   'click',
//   function() {
//     console.log(this); // ! points to link
//   },
//   false
// );

// ? correct way to bind 'this' to the desired context

// $('myLink').on('click', function() {
//   console.log(this); // points to myLink (as expected)
//   const _this = this; // store reference
//   $.ajax({
//     // ajax set up
//     success() {
//       console.log(this); // points to the global object. Huh?
//       console.log(_this); // better!
//     },
//   });
// });

// ? 'this' playground

const film = {
  title: 'fifth element',
  whatFilm() {
    console.log(this);
  },
};

// * points to the object it is a method of.
film.play = function() {
  console.log(this);
};
// film.play(); // returns te 'film' object;

// * this constructor fucntion does now point to the window although it is a regular function
// * the constructor creates a new empty object and points the 'this' variable to that objects.
function Cinema(title) {
  this.title = title;
  console.log(this);
}

const dvd = new Cinema('nemo');

// * we add 'this' as the thisArg to the forEach function therefore pointing the 'this' to that object.
const showings = {
  filmTitle: 'terminator',
  times: ['12:00', '14:30', '16:45', '19:00'],
  filmTimes() {
    this.times.forEach(function(time) {
      console.log(this.filmTitle, time);
    }, this);
  },
};

showings.filmTimes();

// ? functions that contain the thisArg variable
// * Array.from, Array.every, Array.filter, Array.find, Array.findIndex,
// * Array.forEach, Array.map, Array.some
