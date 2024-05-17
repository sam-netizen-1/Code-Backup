function spiralize(n) {
  let result = new Array(n).fill().map(() => new Array(n).fill(1)); // create empty n x n array
  for (let index1 = 0; index1 <= n; index1++) {
    for (let index2 = 0; index2 <= n; index2++) {
      if (index1 === 1 && index2 < n - 1) {
        result[index1][index2] = 0;
      }
      if (index1 !== 0 && index1 !== n - 1 && index2 === n - 2) {
        result[index1][index2] = 0;
      }
    }
  }
  return result;
}
console.log(spiralize(5));
