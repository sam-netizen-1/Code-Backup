let data = document.getElementById("count");
let count = 0;
let decrement = document.getElementById("decrement");
decrement.onclick = () => {
  count--;
  data.innerText = count;
};
let increment = document.getElementById("increment");
increment.onclick = () => {
  count++;
  data.innerText = count;
};
