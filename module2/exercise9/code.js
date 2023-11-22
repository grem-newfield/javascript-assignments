let myArr = [1, 3, 5, 4, 2, 5, 7, 3, 6, 2]

function even(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = parseInt(arr[i]);
    if (num % 2 === 0) result.push(num);
  }
  return result;
}

console.log("Initial Array: ", myArr);
console.log("Even Array: ", even(myArr));
