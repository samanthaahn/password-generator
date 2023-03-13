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
    var lowerCaseOpt = confirm("Do you want lower case?");
        // prompt do you want upper case
    var upperCaseOpt = confirm("Do you want upper case?");
        // promopt do you want special characters 
    var specialCharactersOpt = confirm("Do you want special characters?");
        // promot do you want numbers
    var numbersOpt = confirm("Do you want numbers? ");

    if (lowerCaseOpt) {
        userChoice += lowerCase;
        //adding the user choice with the lower case to see whether they picked lowercaseOpt
    }

    if (upperCaseOpt) {
        userChoice += upperCase;
    }

    if (specialCharactersOpt) {
        userChoice += specialCharacters;
    }

    if (numbersOpt) {
        userChoice += numbers;
    }


    //randomize the password 
    var userPassword = '';

    // for ( var count =0; count < length (can't go over the number they picked); count++ (you're adding 1 to the count var))
    for (var count = 0; count < length; count++) {
    var index = Math.floor(Math.random() * userChoice.length);
    userPassword += userChoice[index];
    } 

    //return randomizes password (this doesn't really count)   
    return userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

