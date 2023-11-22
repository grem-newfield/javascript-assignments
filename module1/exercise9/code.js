var $ = function (id) { return document.getElementById(id); };

function is_prime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

const num = parseInt(prompt('Type a number.'));

$("mark").textContent = num + ' is' + (is_prime(num) ? '' : ' not') + " prime.";




