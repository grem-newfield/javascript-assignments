var $ = function (id) { return document.getElementById(id); };

if (!confirm('Should i calculate the square root?')) {
  alert('The square root not calculated.')
} else {
  let number = parseFloat(prompt('Input number.'));
  if (number <= 0) {
    alert('The square root of a negative number is not defined.');
  } else {
    $('mark').textContent = "Square root of " + number + " is " + Math.sqrt(number);
  }
}
