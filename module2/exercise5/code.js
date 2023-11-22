let nums = []

while (true) {
  let input = parseFloat(prompt('Enter a number'))
  if (input == 0) break;
  if (nums.includes(input)) break;
  nums.push(input)
}

console.log('Numbers: ')
for (let i = 0; i < nums.length; i++) {
  const element = nums[i]
  console.log(element)
}

