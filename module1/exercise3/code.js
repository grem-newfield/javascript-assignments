var $ = function (id) { return document.getElementById(id); };

let integers = prompt('Give 3 integers (space separated)');
let integers_split = integers.split(" ").map(parseFloat);


let sum = 0;
let product = 1;

for (let i = 0; i < integers_split.length; i++) {
  sum += integers_split[i];
  product *= integers_split[i];
}

$("sum").textContent = sum;
$("product").textContent = product;
$("average").textContent = sum / integers_split.length;
