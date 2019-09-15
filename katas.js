// ? Katas

const num = 100;
const res = [];

for (let i = 1; i <= num; i += 1) {
  res.push(i);
}

const fizzy = res.map(e => {
  if (e % 3 === 0 && e % 5 === 0) {
    e = 'fizzbuzz';
  } else if (e % 3 === 0) {
    e = 'fizz';
  } else if (e % 5 === 0) {
    e = 'buzz';
  }
  return e;
});

console.log(fizzy);
