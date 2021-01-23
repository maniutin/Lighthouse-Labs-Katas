const conditionalSum = function (values, condition) {
  let evenTotal = 0;
  let oddTotal = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === "even") {
      evenTotal += values[i];
    } else {
      if (values[i] % 2 === 1 && condition === "odd") {
        oddTotal += values[i];
      }
    }
  }
  return condition === "even" ? evenTotal : oddTotal;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
