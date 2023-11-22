var $ = function (id) { return document.getElementById(id); };

function throw_d6() {
  return Math.floor(Math.random() * 6) + 1;
}

function throw_many_d6(amount_of_dice) {
  let sum = 0;
  for (let i = 0; i < amount_of_dice; i++) {
    sum += throw_d6();

  }
  return sum;
}

let amount_of_dice = parseInt(prompt('How many dice?'));

$('mark').textContent = "Sum: " + throw_many_d6(amount_of_dice);



