const randomDatabase = [
  {
    id: 1,
    result: 50,
  },
  {
    id: 2,
    result: 80,
  },
  {
    id: 5,
    result: 30,
  },
  {
    id: 9,
    result: 20,
  },
  {
    id: "2",
    result: 20,
  },
  {
    id: "5",
    result: 10,
  },
];
let func = function (id) {
  let sum = randomDatabase.reduce((acc, obj) => {
    if (id == obj.id) {
      return acc + obj.result;
    } else {
      return acc;
    }
  }, 0);
  return sum;
};

console.log(func(2));
