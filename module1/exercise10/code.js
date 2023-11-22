var $ = function (id) { return document.getElementById(id); };
const AMOUNT_OF_THROWS = 10_000;

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

function simulate_dice(amount_of_dice, amount_of_throws, die_eye_sum) {
  let probability = 0.0
  for (let i = 0; i < amount_of_throws; i++) {
    let t = throw_many_d6(amount_of_dice)
    console.log(t)
    if (t === die_eye_sum) {
      probability += 100.0 / amount_of_throws
    }
  }
  return probability
}

let amount_of_dice = parseInt(prompt('How many dice?'))
let die_eye_sum = parseInt(prompt('Give dice eye sum.'))
let probability = simulate_dice(amount_of_dice, AMOUNT_OF_THROWS, die_eye_sum);

$("mark").textContent = 'Probability to get sum ' + die_eye_sum + ' with ' + amount_of_dice + ' dice is ' + probability.toFixed(2) + " %"




