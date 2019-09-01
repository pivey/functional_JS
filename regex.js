// ? input validation using test
const str = '123456789';
if (/^\d{9}$/.test(str)) console.log('1 -> 9, you got it');

// ? phone number matching
const phone1 = '+33 6 68 56 23 05';
const phone2 = '06 68 56 23 05';

const regex = /^((\+33 \d)|(0\d))( \d{2}){4}$/;

if (regex.test(phone1) && regex.test(phone2)) console.log('Call me maybe');

// * uid for logging in
const uid = '6-DAVID-6';
const uidRegex = /^(\d)-.+-\1$/;

if (uidRegex.test(uid)) console.log('It is a valid uid');

// ? ***************    lookaheads JS   ********************

const positive = /x(?=y)/.test('xcvgtxy');
const negative = /x(?!y)/.test('fhgydqwerx');

console.log(positive, negative);

// * positive lookahead.

const people = `
- Bob (vegetarian)
- Billa (vegan)
- Francis
- Elli (vegetarian)
- Fred (vegan)
`;

const notVegan = /-\s(\w+?)\s(?!\(vegan\))/g;

const vegan = /-\s(\w+?)\s(?=\(vegan\))/g;
//                |----|  |-----------|
//                  /            \
//           more than one        \
//           word character      positive lookahead
//           but as few as       => followed by "(vegan)"
//           possible
//           '\(','\)' the parenthesis' must be escaped

/*  //* Explanation of 'vegan' regex
    Match any dash followed by one space character followed 
    by more one or more but as few as possible word characters 
    (A-Za-z0-9_) followed by a space and the pattern "(vegan)"
*/

let result = vegan.exec(people);

console.log(result);

while (result) {
  console.log(result[1]);
  result = vegan.exec(people);
}

// ? *************  Positive lookbehind regex   *******************8

const persons = `
- (vegetarian) Bob
- (vegan) Billa
- Francis
- (vegetarian) Elli
- (vegan) Fred
`;

const posLookBehind = /(?<=\(vegan\))\s(\w+)/g;
//             |------------|  |---|
//                  /             \__
//         positive lookbehind        \
//       => following "(vegan)"     more than one
//                                  word character
//                                  but as few as possible

let result2 = posLookBehind.exec(persons);

while (result2) {
  console.log(result2[1]);
  result2 = posLookBehind.exec(persons);
}

// Result:
// Billa
// Fred
