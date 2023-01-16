// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector(#generate");
                                         
const myArrayUpper = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e, i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const myArrayNumeric = Array.from(Array(10)).map((e, i) => i + 48);
const numericArray = myArrayNumeric.map((x) => String.fromCharCode(x));

const myArraySpecial = Array.from(Array(15)).map((e, i) => i + 33);
const specCharArray = myArraySpecial.map((x) => String.fromCharCode(x));                                         
                                                                              
                                         
//define generatePassword function
function generatePassword(){

//define local variable  
var pwResults = "";
  
//user can choose length of password 8-128
var characterLength = window.prompt("Please choose the length of your password.\nPassword length must be between 8 and 128 charcters long. \n Input that value in the box and clock OK.");

//user input is a string and needs to be converted to interger
var pwLength = parseInt(characterLength);

//user chooses properities of characters for password 
if (pwLength > 7 && pwLength < 129) {
  var lowerCase = window.confirm(
    "do you want to include lowercase letters in your password?\nClick OK to include or cancel to exclude.");
  var upperCase - window.confirm(
    "do you want to include uppercase letters in your password?\nCLick OK to include or cancel to exclude.");
  var numericVal - window.confirm(
    "do you want to include numbers in your password?\nCLick OK to include or cancel to exclude.");
  var specChar - window.confirm(
    "do you want to include special characters in your password?\nCLick OK to include or cancel to exclude.");                        
} else {
  //alert pops up if user enters number less than 8 or more than 128
  window.alert("that is an invalid entry.  Select a length between 8 and 128");
  return generatePassword();
}
  
  var pool = [];

  if (upperCase == true) pool.push(...alphabetUpper);

  if (lowerCase == true) pool.push(...alphabetLower);

  if (numericVal == true) pool.push(...numericArray);

  if (specChar == true) pool.push(...specCharArray);

  if (lowerCase || upperCase || numericVal || specChar) {
    for (var i = 0; i < pwLength; i++) {
      pwResults += pool[Math.floor(Math.random() * pool.length)];
    }
  } else {
    window.alert(
      "A minimum of one variable must be selected to generate a password."
    );
    return generatePassword();
  }
  return pwResults();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
