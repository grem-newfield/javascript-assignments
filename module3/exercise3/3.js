'use strict';
const names = ['John', 'Paul', 'Jones'];
let target = document.getElementById('target')
names.forEach(name => {
  target.innerHTML += `<li>${name}</li>`
})
