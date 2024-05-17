// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "imaginedragons",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);