var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", myFunction);

function myFunction() {
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



  // while (characterTypeCount === 0) {
  //   if(confirm("Do you want to ")
  // }

  // var lowerCaseChoice = confirm("Criteria 1 of 2: Password Character Types \n Pick a password length by typing a number from 8 to 128:");

  // while (isNaN(parseInt(lengthChoice)) === true && parseInt(lengthChoice) > 128 || parseInt(lengthChoice) < 8) {
  //   alert("Sorry, '" + lengthChoice + "' is not a valid choice. \nPlease select a number from 8 to 128, to set your password length.");
  //   lengthChoice = prompt("Criteria 2 of 2: Password Length\n Pick a password length by typing a number from 8 to 128:");
  // };

  // alert(lengthChoice);



  // if ((lengthChoice) === "NaN") {
  //   alert("Sorry, '" + lengthChoice + "' is not a valid choice. \nPlease select a number from 8 to 128, to set your password length.");
  //   lengthChoice = prompt("Criteria 1 of 3: Password Length\n Pick a password length by typing a number from 8 to 128:")
  // }



  // alert(lengthChoice); 
  // while (lengthChoice === NaN || lengthChoice > 128 || lengthChoice < 8) {
  //   alert("Sorry, '" + lengthChoice + "' is not a valid choice. \nPlease select a number from 8 to 128, to set your password length.");
  //   lengthChoice = parseInt(prompt("Criteria 1 of 3: Password Length\n Pick a password length by typing a number from 8 to 128:"));
  //   alert(lengthChoice);
  // };
  // alert(lengthChoice);
  // // if (typeof(lengthChoice) != "number" || lengthChoice > 128 || lengthChoice < 8) {
  // //       alert("Sorry, '" + lengthChoice + "' is not a valid choice. \nPlease select a number from 8 to 128, to set your password length.");
  // //       lengthChoice = prompt("Criteria 1 of 3: Password Length\n Pick a password length by typing a number from 8 to 128:");
  // //   } else {
  // // alert(typeof(lengthChoice));
  // // };


}



// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());

// function generatePassword() {

//   prompt("do you want to play a game?")

// }