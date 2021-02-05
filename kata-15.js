const squareCode = function(message) {
  const lineLength = Math.ceil(Math.sqrt(message.replace(/ /g, "").length));
  let arrColumns = [];
  for (let i = 0; i < lineLength; i++) {
    arrColumns.push(
      message.replace(/ /g, "").slice(i * lineLength, lineLength * (i + 1))
    );
  }
  let finalArr = [];
  //let arr = [1, 2, 3];
  arrColumns.forEach((line, index) => {
    for (let i = 0; i < line.length; i++) {
      if (index === 0) {
        finalArr.push(line[i]);
      } else {
        finalArr[i] += line[i];
      }
    }
  });

  return finalArr.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
