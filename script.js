//Global Variable Declarations 
var wholeNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Prompts user after generate button is clicked

document.querySelector("#generate").addEventListener("click", writePassword);




//Prompting user for the length of the password, its a function with a while loop inside checking input criteria 

function generatePassword() {

  var length_of_password = window.prompt("How many characters should your password contain?");


  //validation on the input 
  while (length_of_password <= 8 || length_of_password >= 128 || isNaN(length_of_password)) {
    console.log(length_of_password);
    alert("Password length must be no less than 8 characters, no more than 128 characters, and a whole number!")
    var length_of_password = window.prompt("How many characters should your password contain?");

  }

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




