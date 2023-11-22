var $ = function (id) { return document.getElementById(id); };
let numbers = prompt("Give 5 numbers (space split)").trim().split(" ")

let numbers_reverse = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  let element = numbers[i];
  numbers_reverse.push(element)
}

console.log("Input: ", numbers)
console.log("After sort: ", numbers_reverse)

