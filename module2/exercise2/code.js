var $ = function (id) { return document.getElementById(id); };
let participants = []

let number_of_names = parseInt(prompt('Number of participants?'))
for (let i = 0; i < number_of_names; i++) {
  let p = prompt('Name of participant ' + (i + 1))
  participants.push(p)
}

participants = participants.sort()
participants.forEach(P => {
  $('mark').innerHTML += `<li>${P}</li>`
})

