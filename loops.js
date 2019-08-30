// const elements = document.querySelectorAll('a');
// for (let i = 0; i < elements.length; i += 1) {
//   elements[i].style.color = 'red';
// }

// ? nested for in loop for JSON data
//* The Outer Loop runs 3 times and covers nodes ‘one’, ‘two’ & ‘three’.
//* The Inner Loop covers all the values inside the selected node i.e the nodes ‘one’, ‘two’, & ‘three’.

const json = {
  jsonData: {
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32],
  },
};

console.log('******* object array loop: ');

for (const key in json.jsonData) {
  console.log(key, ': ');
  for (const key1 in json.jsonData[key]) {
    console.log(json.jsonData[key][key1]);
  }
}

const json2 = {
  jsonData: [
    {
      one: [11, 12, 13, 14, 15],
    },
    {
      two: [21, 22, 23],
    },
    {
      three: [31, 32],
    },
  ],
};

console.log('******* nested loops: ');

for (let i = 0; i < json2.jsonData.length; i += 1) {
  for (const key in json2.jsonData[i]) {
    for (let j = 0; j < json2.jsonData[i][key].length; j += 1) {
      console.log(json2.jsonData[i][key][j]);
    }
  }
}

const family = {
  members: [
    {
      brothers: ['harry', 'paul', 'alfred'],
    },
    {
      sisters: ['annie', 'mary', 'julie', 'kate'],
    },
    {
      grandparents: ['alfred', 'marion', 'simon', 'alexandria'],
    },
  ],
};

console.log('********* family loop: ');

for (let i = 0; i < family.members.length; i += 1) {
  for (const key in family.members[i]) {
    for (let k = 0; k < family.members[i][key].length; k += 1) {
      console.log(family.members[i][key][k]);
    }
  }
}
