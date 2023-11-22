let target = document.getElementById("target")
let item1 = document.createElement('li')
item1.textContent = 'First item'
let item2 = document.createElement('li')
item2.textContent = 'Second item'
let item3 = document.createElement('li')
item3.textContent = 'Third item'
target.append(item1, item2, item3)
