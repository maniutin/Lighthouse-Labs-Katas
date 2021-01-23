const urlEncode = function (text) {
  let charArr = [];
  let trimmedText = text.trim();
  for (let i = 0; i < trimmedText.length; i++) {
    if (trimmedText[i] === " ") {
      charArr.push("%20");
    } else {
      charArr.push(trimmedText[i]);
    }
  }

  return charArr.join("");
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
