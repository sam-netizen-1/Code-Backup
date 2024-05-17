let array = [[{ a: 1 }, { a: 1 }, { c: 3 }], [{ b: 2 }, { b: 2 }], [{ d: 4 }]];
let length = array.length;
for (let index = 0; index < length; index++) {
  let temp = array.shift();
  for (let i = 0; i < temp.length; i++) {
    array.push(temp[i]);
  }
}
console.log(array);

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
