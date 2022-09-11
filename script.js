function areYouPlayingBanjo(name) {
  console.log(name);
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
console.log(areYouPlayingBanjo("abida"));

// Sum Numbers
function sum(numbers) {
  if (numbers.length > 0) {
    let sum = 0;
    numbers.forEach((ele) => {
      sum += ele;
    });
    return sum;
  }
}

console.log(sum([]));

function opposite(number) {
  return number * -1;
}

console.log(opposite(32));

const stringToNumber = function (str) {
  return parseInt(str);
};

console.log(stringToNumber("1405"));

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else return num;
}

console.log(makeNegative(0));

console.log(greet(hasan));
