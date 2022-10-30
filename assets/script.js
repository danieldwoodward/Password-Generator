// Assignment Code
var generateBtn = document.querySelector("#generate");
//special charachters array
const specialCharachters = [
  "*",
  " ",
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
//numeric charachters array
const numericCharachters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//lower case charachters array
const lowerCasedChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Upper case charachters
const upperCasedChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function passwordOptions() {
  let passwordLength = prompt(
    "How long would you like your password to be between 8-128 charachters?"
  );

  if (passwordLength < 8 || passwordLength > 128 || passwordLength !== "number") {
    alert("Your password is not within the specified perameters.");
    return "Your Secure Password";
  }
  let uppers = confirm("Would you like upper-case letters in your password?");

  let lowers = confirm("Would you like lower-case letters in your password?");

  let number = confirm("Would you like numeric values in your password?");

  let spec = confirm("Would you like special charachters in your password?");

  let options = { passwordLength, uppers, lowers, number, spec };

  if (uppers === false && lowers === false && number === false && spec === false) {
    alert("You did not pick any values for your password. Try again.")
    return "Your Secure Password";
  }

  alert("Congratulations your new password has been generated! Click button to show")

  return options;
}
function generatePassword() {
  let options = passwordOptions();
  let bigArray = [];
  let finalPassword = [];
  if (options.uppers) {
    bigArray = bigArray.concat(upperCasedChars);
  }

  if (options.lowers) {
    bigArray = bigArray.concat(lowerCasedChars);
  }

  if (options.number) {
    bigArray = bigArray.concat(numericCharachters);
  }

  if (options.spec) {
    bigArray = bigArray.concat(specialCharachters);
  }

  console.log(bigArray);
  for (let i = 0; i < options.passwordLength; i++) {
    finalPassword.push(pickRandom(bigArray));
  }

  return finalPassword.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function pickRandom(array) {
  let randomChar = Math.floor(Math.random() * array.length);
  return array[randomChar];
}

// passwordOptions();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
