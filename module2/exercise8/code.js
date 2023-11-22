var $ = function (id) { return document.getElementById(id); };

function concat(arr) {
  let result = ''
  arr.forEach(str => {
    result += str
  })
  return result
}

let strings = [
  'Johnny',
  'DeeDee',
  'Joey',
  'Marky',
]

$('mark').textContent = concat(strings)
