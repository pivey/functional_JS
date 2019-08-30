const team = {
  manager: 'Henry',
  teamLeader: 'sussan',
  developer: 'charlie',
  sales: 'debra',
};

const teamMembers = Object.keys(team).forEach(key => {
  console.log(key, team[key]);
});

const values = Object.values(team); // [ 'Henry', 'sussan', 'charlie', 'debra' ]

Object.entries(team);

console.log(Object.entries(team)); // [ [ 'manager', 'Henry' ],[ 'teamLeader', 'sussan' ],[ 'developer', 'charlie' ],[ 'sales', 'debra' ] ]
