
// This variable makes a hotlink to the #generate button//
var generateBtn = document.querySelector("#generate");

// This overall function generates the new password, upong the button being clicked by the user//
function generatePassword() {

  // This variable takes in the user's response to a prompt asking for a password length in numerals//
  var lengthChoice = prompt("Criteria 1 of 2: Password Length\n\nPick a password length by typing a number from 8 to 128:");

  // This while loop does not let the user proceed until they have given a valid response//
  while (isNaN(parseInt(lengthChoice)) === true || parseInt(lengthChoice) > 128 || parseInt(lengthChoice) < 8) {
    alert("Sorry, '" + lengthChoice + "' is not a valid choice.\n\nPlease select a number from 8 to 128, to set your password length.");
    lengthChoice = prompt("Criteria 1 of 2: Password Length\n\nPick a password length by typing a number from 8 to 128:");
  };

  // This alert confirms and returns the users' password length//
  alert("Thank you" + "\n\n" + "The password will be " + lengthChoice + " characters long");

  // This variable lets the function know if the user has picked at least one character set //
  var characterTypeCount = false;

  // These variables let the function know if the user has picked each individual character set//
  var lowerCaseChar = false;
  var upperCaseChar = false;
  var specialChar = false;
  var numChar = false;

  // These confirms ask the user to say yes or no to each character set in sequence, and then changes the above variables if "yes"//
  lowerCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Lower Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
  upperCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Upper Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
  specialChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Special' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
  numChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Numeral' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");

  // This if statement checks if any character set was selcted, if yes, then it changes characterTypeCount to true//
  if (lowerCaseChar === true || upperCaseChar === true || specialChar === true || numChar === true) {
    characterTypeCount = true
  };
  
  // This while loop does not let the user continue if they have not yet selected at least one character set; if not, it cycles back through the confirms and then rechecks if it needs to change the characterTypeCount //
  while (characterTypeCount === false) {
    alert("Sorry, you cannot move forward unti you select at least one\nof the following four types of characters:\n\nLower Case, Upper Case, Special Characters, and/or Numerals");
    lowerCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Lower Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
    upperCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Upper Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
    specialChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Special' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
    numChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following four types must be selected:\nLower Case, Upper Case, Special Characters, and/or Numerals\n\nDo you want to use 'Numeral' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
    if (lowerCaseChar === true || upperCaseChar === true || specialChar === true || numChar === true) {
      characterTypeCount = true
    };
  }

  // This alert confirms that the user has selceted at least one chracter count and returns all four choices //
  alert ("Thank you, you have chosen:\n\n" + "Lower Case Characters: " + lowerCaseChar + "\nUpper Case Characters: " + upperCaseChar + "\nSpecial Characters: " + specialChar + "\nNumeral Characters: " + numChar )

  // These variables contain all possible characters, sorted by charcters set, each in a seperate single string //
  var charSetLower = "abcdefghijklmnopqrstuvwxyz";
  var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charSetSpecial = "!\#$%&'()*+,-./:;<=>?@[]^_{|}~";
  var charSetNum = "0123456789";

  // This variable is the list of characters that the user selected, in selecting the four character sets; it begins as an empty string //
  var characterOptions = "";

  // The series of ifs below, check if a user selected an individual character set and, if yes, adds those characters to the characterOptions string//
  if (lowerCaseChar === true) {
    characterOptions += charSetLower;
  };
  if (upperCaseChar === true) {
    characterOptions += charSetUpper;
  };
  if (specialChar === true) {
    characterOptions += charSetSpecial;
  };
  if (numChar === true) {
    characterOptions += charSetNum;
  };

  // This variable is the string representing the newly generated password, which is intially empty //
  var passwordEntry = "";

  // This for loop runs as many times as the player selected as the password length, each time adding a randowm character from the newly populated characterOptions string //
  for (var i = 1; i < (parseInt(lengthChoice)+1); i++) {
    passwordEntry += characterOptions.charAt(Math.floor(Math.random() * (characterOptions.length-1)));
  };

  // This returns the newly generated password for the writePassword function to take in //
  return passwordEntry;

}

// This function takes in the new passwordEntry string, finds the place on the window that contains #password and then overrides whatever text is already there with the new password, 
//finally it pops up an alert to tell the user that a new password has been generated //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("New password generated!");

}

// This creates the listener event that causes the writePassword function to be called after the user clicks the "generate" button //
generateBtn.addEventListener("click", writePassword);