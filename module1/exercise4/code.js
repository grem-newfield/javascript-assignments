var $ = function (id) { return document.getElementById(id); };

let student = prompt('Tell me your name.');

classes = [
  "Gryffindor",
  "Slytherin",
  "Hufflepuff",
  "Ravenclaw",
]

$("mark").textContent = student + ", you are " + classes[Math.floor(Math.random() * 4)];

// Q: Why and where could i use an if-else statement here?
