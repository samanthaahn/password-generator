// I need a button to generate a password DONE
// Then I need a series of prompts for a password
// I need criteria for the password like : length 8 characters minumium and no more than 128 characters 
// I need to confrim whetehr or not to include lowercase, uppercase, numeric, and/or special characters when I answer each prompt 
// Input should be validated and at lease one character type should be selected 
// When all prompts are answered then a password if generated that matches what the user picked. 
// password is desplayed in an alert or written on the page 


// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_+?";
var userChoice = ''; 


// Write password to the #password input
function writePassword() {
var password = generatePassword(); //function call SO we have to define it 
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

function generatePassword() {
    //ask user how many characters they want 
        // we are going to use the prompts and boundary of 8-128 characters DONE 
        // we need an "if" statement to make sure it's valid DONE 
        // send an alert to use saying invalude responce DONE 
        // recall current function  DONE 
            // we need to save their response to their "length" variable 
    length = prompt("How long do you want your password to be? (Choose a number between 8 and 128");
    if (length < 8 || length > 128) {
        alert("Invalid responce!");
        generatePassword();
    }

    //ask user what they want in the password 
    // prompt user do you want lower case
    lowerCase = prompt("Do you want lower case?");
    // prompt do you want upper case
    upperCase = prompt("Do you want upper case?");
    // promopt do you want special characters 
    specialCharacters = prompt("Do you want special characters?");
    // promot do you want numbers
    numbers = prompt("Do you want numbers? ");


    //randomize the password 


    //return randomizes password (this doesn't really count)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

