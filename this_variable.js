// ? JS 'this' variable

// * The value 'this' is given depends on how a function is invoked

// * When attaching a function using addEventListener() the value of this is changed

// * if 'this' is used in a function bound as an event handler then this is set to the reference to the DOM element handler.

// todo The success method within the Ajax request is just a regular function, and therefore 'this 'is set to the global object,

$('myLink').on('click', function() {
  console.log(this); // ! points to myLink (as expected)
  $.ajax({
    success() {
      console.log(this); // ! points to the global object. Huh?
    },
  });
});

function foo() {
  console.log(this); // ! global object when just used inside a normal function
}

myapp = {};
myapp.foo = function() {
  console.log(this); // ! points to myapp object
};

const link = document.getElementById('myId');
link.addEventListener(
  'click',
  function() {
    console.log(this); // ! points to link
  },
  false
);

// ? correct way to bind 'this' to the desired context

$('myLink').on('click', function() {
  console.log(this); // points to myLink (as expected)
  const _this = this; // store reference
  $.ajax({
    // ajax set up
    success() {
      console.log(this); // points to the global object. Huh?
      console.log(_this); // better!
    },
  });
});
