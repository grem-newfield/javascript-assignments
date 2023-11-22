'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let target = document.getElementById('target')

students.forEach(student => {
  let e = document.createElement('option')
  e.textContent = student.name
  e.value = student.id
  target.appendChild(e)
});

