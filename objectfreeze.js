//* Object.freeze() vs Object.seal()

//! Object.freeze
// ? prevents us from adding, removing or changing an object in ary way.

const sweden = {
  '1': 'lakes',
  '2': 'mountains',
  '3': 'trees',
  '4': 'archipelago',
  cities: {
    capital: 'Stockholm',
    '2': 'Uppsala',
    town: {
      small: 'abisko',
      medium: 'umea',
      large: 'karlstad',
    },
  },
};

Object.freeze(sweden);

sweden[1] = 'system bolaget'; //* does nothing to the object

// console.log(sweden, Object.isFrozen(sweden));  //* prints the original object and true because it is frozen

console.log(Object.isFrozen(sweden), Object.isFrozen(sweden.cities)); //! false, true

Object.freeze(sweden.cities);

console.log(Object.isFrozen(sweden), Object.isFrozen(sweden.cities)); //! true, true

//* freezing a nested object freezes it's parent object as well.

//* freeze only works on level deep from the outside so if the key if for another object then that is changable.

console.log(Object.isExtensible(sweden)); //! false
const sverige = JSON.parse(JSON.stringify(sweden));
console.log(Object.isExtensible(sverige)); //! true
//* making a copy of the object means that you can then make it extensible again.

console.log(Object.isFrozen(sweden.cities.town)); //! false - not all nested objects are frozen

//* returns a completely frozen object, all nested objects will also be frozen.
const freeze = (x, seen = new Set()) => {
  if (x !== null && x !== undefined) {
    Object.keys(x).forEach(key => {
      if (seen.has(x[key])) {
        return;
      }
      seen.add(x[key]);
      freeze(x[key], seen);
    });
  }
  return Object.freeze(x);
};

const swed = freeze(sweden);

console.log(Object.isFrozen(swed.cities.town)); //! true - all nested objects are frozen

//! Object.seal()
// ? almost the same as Object.freeze() except that you can still change elements, just not add or remove

const sealedSverige = Object.seal(sverige);

sverige.cities.capital = 'malmo';

sverige.cities.west = 'gothenburg';

// console.log('altered', sealedSverige) //* no errors because you can change values with Object.seal();

Object.preventExtensions(); //* does the same as seal except you can delete properties, you just cannot add them.
