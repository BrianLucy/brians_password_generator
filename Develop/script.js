// Assignment code here

//define generatePassword function
function generatePassword(){

//define local variable  
var pwResults = "";
//user can choose length of password 8-128
  var characterLength = window.prompt("Please choose the length of your password. \n Password length must be between 8 and 128 charcters long. \n Input that value in the box and clock OK."0:
//user input is a string and needs to be converted to interger
var pwLength = parseInt(characterLength);
  
if (pwLength > && pwLength < 129) {
  var lowerCase = window.confirm(
    "do you want to include lowercase letters in your password?\nClick OK to include or cancel to exclude.");
  var uperCase - window.confirm(
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
  return pwResults();
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
