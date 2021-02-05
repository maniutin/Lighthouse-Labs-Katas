const urlDecode = function(text) {
  const noPercentText = text.replace(/%20/g, " ");
  const noAmpText = noPercentText.replace(/&/g, "=");
  const stringSplit = noAmpText.split("=");
  let output = {};
  for (let i = 0; i < stringSplit.length; i += 2) {
    output[stringSplit[i]] = stringSplit[i + 1];
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
