var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthChoice = prompt("Criteria 1 of 2: Password Length\n\nPick a password length by typing a number from 8 to 128:");

  while (isNaN(parseInt(lengthChoice)) === true || parseInt(lengthChoice) > 128 || parseInt(lengthChoice) < 8) {
    alert("Sorry, '" + lengthChoice + "' is not a valid choice.\n\nPlease select a number from 8 to 128, to set your password length.");
    lengthChoice = prompt("Criteria 1 of 2: Password Length\n\nPick a password length by typing a number from 8 to 128:");
  };

  alert("Thank you" + "\n\n" + "The password will be " + lengthChoice + " characters long");

  var characterTypeCount = false;
  var lowerCaseChar = false;
  var upperCaseChar = false;
  var specialChar = false;

  lowerCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following three types must be selected:\nLower Case, Upper Case, and/or Special Characters\n\nDo you want to use 'Lower Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
  upperCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following three types must be selected:\nLower Case, Upper Case, and/or Special Characters\n\nDo you want to use 'Upper Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
  specialChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following three types must be selected:\nLower Case, Upper Case, and/or Special Characters\n\nDo you want to use 'Special' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");


  if (lowerCaseChar === true || upperCaseChar === true || specialChar === true) {
    characterTypeCount = true
  };

  while (characterTypeCount === false) {
    alert("Sorry, you cannot move forward unti you select at least one\nof the following three types of characters:\n\nLower Case, Upper Case, and/or Special Characters");
    lowerCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following three types must be selected:\nLower Case, Upper Case, and/or Special Characters\n\nDo you want to use 'Lower Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
    upperCaseChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following three types must be selected:\nLower Case, Upper Case, and/or Special Characters\n\nDo you want to use 'Upper Case' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
    specialChar = confirm("Criteria 2 of 2: Character Type(s)\n\nNote that at least one of the following three types must be selected:\nLower Case, Upper Case, and/or Special Characters\n\nDo you want to use 'Special' characters?\n('Ok' = 'Yes' and 'Cancel' = 'No')");
    if (lowerCaseChar === true || upperCaseChar === true || specialChar === true) {
      characterTypeCount = true
    };
  }


  if (lowerCaseChar === true && upperCaseChar === true && specialChar === true) {
    alert("Thank you\n\nYou have selected: Lower Case, Upper Case, and Special Characters\n\nYou must really not want anyone to get in here lolz")
  } else if (lowerCaseChar === true && upperCaseChar === false && specialChar === false) {
    alert("Thank you\n\nYou have selected: Lower Case Characters only")
  } else if (lowerCaseChar === true && upperCaseChar === false && specialChar === true) {
    alert("Thank you\n\nYou have selected: Lower Case, and Special Characters")
  } else if (lowerCaseChar === true && upperCaseChar === true && specialChar === false) {
    alert("Thank you\n\nYou have selected: Lower Case and Upper Case Characters")
  } else if (lowerCaseChar === false && upperCaseChar === true && specialChar === false) {
    alert("Thank you\n\nYou have selected: Upper Case Characters only")
  } else if (lowerCaseChar === false && upperCaseChar === true && specialChar === true) {
    alert("Thank you\n\nYou have selected: Upper Case and Special Characters")
  } else if (lowerCaseChar === false && upperCaseChar === false && specialChar === true) {
    alert("Thank you\n\nYou have selected: Special Characters only")
  };

  var charSetLower = "abcdefghijklmnopqrstuvwxyz";
  var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charSetSpecial = "!\#$%&'()*+,-./:;<=>?@[]^_{|}~";
  var characterOptions = "";

  if (lowerCaseChar === true) {
    characterOptions += charSetLower;
    
  };
  if (upperCaseChar === true) {
    characterOptions += charSetUpper;
    }
  
  if (specialChar === true) {
    characterOptions += charSetSpecial;
  };

  var passwordEntry = "";

  for (var i = 1; i < (parseInt(lengthChoice)+1); i++) {
    passwordEntry += characterOptions.charAt(Math.floor(Math.random() * (characterOptions.length-1)));
  };

  return passwordEntry;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("New password generated!");

}

generateBtn.addEventListener("click", writePassword);