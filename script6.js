const areaOrPerimeter = function (l, w) {
  if (l === w) {
    let area = l * w;
    return area;
  } else {
    let perimeter = 2 * l + 2 * w;
    return perimeter;
  }
};

console.log(areaOrPerimeter(12, 11));
