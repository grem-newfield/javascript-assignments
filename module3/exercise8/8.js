const result = document.getElementById('result')
const btn = document.getElementById('start')
btn.addEventListener('click', function (evt) {
  const num1 = parseFloat(document.getElementById('num1').value)
  const num2 = parseFloat(document.getElementById('num2').value)
  let operation = document.getElementById('operation').value

  if (operation === 'add') {
    result.textContent = num1 + num2
  } else if (operation === 'sub') {
    result.textContent = num1 - num2
  } else if (operation === 'multi') {
    result.textContent = num1 * num2
  } else if (operation === 'div') {
    result.textContent = num1 / num2
  }
});

