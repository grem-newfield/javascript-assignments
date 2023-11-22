var $ = function (id) { return document.getElementById(id); };
function throw_d6() {
  return Math.floor(Math.random() * 6) + 1
}

let throws = []

while (true) {
  let dice_throw = throw_d6()
  if (dice_throw === 6) {
    throws.push(dice_throw)
    break
  }
  throws.push(dice_throw)
}

throws.forEach(dice_throw => {
  $('mark').innerHTML += `<li>${dice_throw}</li>`
})

