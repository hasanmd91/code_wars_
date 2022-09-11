function squareSum(array) {
  let sum = 0;
  array.forEach((ele) => {
    sum += ele * ele;
  });
  return sum;
}

console.log(squareSum([2, 3, 4, 5, 6, 7, 8, 9]));
