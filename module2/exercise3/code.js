var $ = function (id) { return document.getElementById(id); };
let dog_names = []

let number_of_names = 6 //parseInt(prompt('Number of participants?'))
for (let i = 0; i < number_of_names; i++) {
  let p = prompt('Name of dog ' + (i + 1))
  dog_names.push(p)
}

dog_names = dog_names.sort().reverse()
dog_names.forEach(d => {
  $('mark').innerHTML += `<li>${d}</li>`
})
