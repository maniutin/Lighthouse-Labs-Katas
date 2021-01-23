const calculateChange = function (total, cash) {
  let change = {};

  let changeAmount = cash - total;

  const denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  for (const denom in denominations) {
    if (changeAmount >= denominations[denom]) {
      change[denom] = Math.floor(changeAmount / denominations[denom]);
      changeAmount -= change[denom] * denominations[denom];
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
