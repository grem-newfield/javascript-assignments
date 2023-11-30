var $ = function (id) { return document.getElementById(id); };
let dog_names = []
for (let i = 0; i < 6; i++) {
  dog_names.push(prompt('Name of dog ' + (i + 1)))
}
dog_names = dog_names.sort().reverse()
dog_names.forEach(d => {
  $('mark').innerHTML += `<li>${d}</li>`
})
