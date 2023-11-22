var $ = function (id) { return document.getElementById(id); };
function throw_dice(sides) {
  return Math.floor(Math.random() * sides) + 1
}

let dice_sides = parseInt(prompt('How many sides?'))

let throws = []

while (true) {
  let dice_throw = throw_dice(dice_sides)
  if (dice_throw === dice_sides) {
    throws.push(dice_throw)
    break
  }
  throws.push(dice_throw)
}

throws.forEach(dice_throw => {
  $('mark').innerHTML += `<li>${dice_throw}</li>`
})

