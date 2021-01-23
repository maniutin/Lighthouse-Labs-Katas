function sumLargestNumbers(data) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = data.length; i >= 0; i--) {
      if (data[i - 1] < data[i]) {
        done = false;
        let sortArr = data[i - 1];
        data[i - 1] = data[i];
        data[i] = sortArr;
      }
    }
  }
  return data[0] + data[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
