let answerArr = [];
const randomNumber = Math.round(Math.random() * 10);

function numberGuesser() {
  let prompt = require("prompt-sync")();
  let answer = prompt("Guess a number: ");

  if (answer == randomNumber) {
    answerArr.push(answer);
    console.log("> " + answer);
    console.log(
      `Congrats, you got it! The number of your attempts is: ${answerArr.length}!`
    );
    process.exit();
  } else {
    while (answer != randomNumber) {
      if (answerArr.includes(answer)) {
        console.log("> " + answer);
        console.log("Already guessed!");
      } else if (answer < randomNumber) {
        answerArr.push(answer);
        console.log("> " + answer);
        console.log("Too Low, bruh!");
      } else if (answer > randomNumber) {
        answerArr.push(answer);
        console.log("> " + answer);
        console.log("Too High, bruh!");
      } else if (isNaN(answer)) {
        console.log(`${answer} is not a number! Try again`);
      }
      numberGuesser();
    }
  }
}
console.log(numberGuesser());
