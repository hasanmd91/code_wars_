function find_average(array) {
  if (array.length > 0) {
    let sum = 0;
    let average = 0;
    array.forEach((element) => {
      sum += element;
    });
    average = sum / array.length;
    return average;
  } else if (array.length <= 0) {
    return 0;
  }
}
// your code here

console.log(find_average([12, 12, 112, 12, 12, 12]));
