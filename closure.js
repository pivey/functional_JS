// ? Closure

// * a function defined withing an outer funtion will have access to the outer functions variables.
// * but the outer function does not have access to the inner functions scope.

function outer() {
  const x = 5;
  function inner() {
    console.log(x); // 5
    const y = 10;
  }
  inner();
  console.log(y); // undefined
}

console.log(outer);
