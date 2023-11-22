const result = document.getElementById('result')
const btn = document.getElementById('start')
btn.addEventListener('click', function (evt) {
  let c = document.getElementById('calculation').value
  if (c.includes('+')) {
    const nums_str = c.split('+');
    const nums_int = nums_str.map(str => parseInt(str))
    result.textContent = nums_int[0] + nums_int[1]
  } else if (c.includes('-')) {
    const nums_str = c.split('-');
    const nums_int = nums_str.map(str => parseInt(str))
    result.textContent = nums_int[0] - nums_int[1]
  } else if (c.includes('*')) {
    const nums_str = c.split('*');
    const nums_int = nums_str.map(str => parseInt(str))
    result.textContent = nums_int[0] * nums_int[1]
  } else if (c.includes('/')) {
    const nums_str = c.split('/');
    const nums_int = nums_str.map(str => parseInt(str))
    result.textContent = nums_int[0] / nums_int[1]
  }
});
