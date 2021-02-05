const makeCase = function(input, casingStyle) {
  // camelCase
  let camel = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        i++;
        string += input[i].toUpperCase();
      } else {
        string += input[i];
      }
    }
    return string;
  };
  // PascalCase
  let pascal = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        string += input[i].toUpperCase();
      } else if (input[i] === " ") {
        i++;
        string += input[i].toUpperCase();
      } else {
        string += input[i];
      }
    }
    return string;
  };
  // snake_case
  let snake = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        string += "_";
      } else {
        string += input[i];
      }
    }
    return string;
  };
  // kebab-case
  let kebab = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        string += "-";
      } else {
        string += input[i];
      }
    }
    return string;
  };
  // Title Case
  let title = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        string += input[i].toUpperCase();
      } else if (input[i] === " ") {
        string += " " + input[i + 1].toUpperCase();
        i++;
      } else {
        string += input[i];
      }
    }
    return string;
  };
  // vOwEl cAsE
  let vowel = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      if (
        input[i] === "a" ||
        input[i] === "e" ||
        input[i] === "i" ||
        input[i] === "o" ||
        input[i] === "u"
      ) {
        string += input[i].toUpperCase();
      } else {
        string += input[i];
      }
    }
    return string;
  };
  // CoNSoNaNT CaSe
  let consonant = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      if (
        input[i] !== "a" &&
        input[i] !== "e" &&
        input[i] !== "i" &&
        input[i] !== "o" &&
        input[i] !== "u"
      ) {
        string += input[i].toUpperCase();
      } else {
        string += input[i];
      }
    }
    return string;
  };
  // UPPERCASE
  let upper = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      string = input.toUpperCase();
    }
    return string;
  };
  // lowercase
  let lower = function(input) {
    let string = "";
    for (let i = 0; i < input.length; i++) {
      string = input.toLowerCase();
    }
    return string;
  };

  if (Array.isArray(casingStyle) === true) {
    for (let i = 0; i < casingStyle.length; i++) {
      if (casingStyle[i] === "camel") {
        input = camel(input);
      } else if (casingStyle[i] === "pascal") {
        input = pascal(input);
      } else if (casingStyle[i] === "snake") {
        input = snake(input);
      } else if (casingStyle[i] === "kebab") {
        input = kebab(input);
      } else if (casingStyle[i] === "title") {
        input = title(input);
      } else if (casingStyle[i] === "vowel") {
        input = vowel(input);
      } else if (casingStyle[i] === "consonant") {
        input = consonant(input);
      } else if (casingStyle[i] === "upper") {
        input = upper(input);
      } else if (casingStyle[i] === "lower") {
        input = lower(input);
      }
    }
  } else {
    if (casingStyle === "camel") {
      input = camel(input);
    } else if (casingStyle === "pascal") {
      input = pascal(input);
    } else if (casingStyle === "snake") {
      input = snake(input);
    } else if (casingStyle === "kebab") {
      input = kebab(input);
    } else if (casingStyle === "title") {
      input = title(input);
    } else if (casingStyle === "vowel") {
      input = vowel(input);
    } else if (casingStyle === "consonant") {
      input = consonant(input);
    } else if (casingStyle === "upper") {
      input = upper(input);
    } else if (casingStyle === "lower") {
      input = lower(input);
    }
  }
  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
