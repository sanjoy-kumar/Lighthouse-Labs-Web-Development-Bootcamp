const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  return vegetables.reduce( (winner, contestant) => contestant[metric] > winner[metric] ? contestant : winner).submitter;
}


console.log(judgeVegetable(vegetables, metric));


