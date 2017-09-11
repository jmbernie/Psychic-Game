// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var alreadyGuessedLetters=[];

    var userWin = 0;
    var userLoss = 0;
    var userGuessCount = 0;
    var computerGuess;
    var userText = document.getElementById("user-text");
    //var computerText = document.getElementById("computer-text");
    var winnerCount = document.getElementById("win-text");
    var loserCount = document.getElementById("loss-text");
    var letterGuessedArray = document.getElementById("letters-guessed");

    // reset game state as first action
    gameReset();
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      console.log(event);
      userText.textContent = event.key;
      // Determines which key was pressed.
      var userGuess = event.key;
      //update text display
      winnerCount.textContent = userWin;
      loserCount.textContent = userLoss;
      letterGuessedArray.textContent = alreadyGuessedLetters;
      //computerText.textContent = computerGuess;      



      // if ===, userWin++
      if(userGuess==computerGuess){
        userWin++;
        gameReset();
      }else if (!alreadyGuessedLetters.includes(userGuess) && (alphabet.includes(userGuess))) { //if guess not already in array
        console.log(userGuess);
        alreadyGuessedLetters.push(userGuess);
        userGuessCount++;
      }
      
      // at 10 counts, increment userLoss and reset game
      if(userGuessCount>9){
        userGuessCount=0;
        userLoss++;
        gameReset();
      }


    }

      // Randomly chooses a letter from the alphabet array. This is the Computer's guess.
      // Also, reset guess count
    function gameReset(){
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      userGuessCount = 0;
      //letterGuessedArray = [];
      alreadyGuessedLetters = [];
    }