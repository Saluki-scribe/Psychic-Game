var win = 0, lose = 0, guesses = 9;

document.onKeyUp = function(event){
    alert("I picked up your key.");
    var userChoice = event.key;
    var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var compGuess = compChoice[Math.floor(Math.random * compChoice.length)]; 

    console.log("Computer's choice: " + compChoice + " User's choice: " + userChoice);

    if(userChoice == compChoice){

        win++;
        document.getElementById("winMessage").innerText = "Your psychic energy is strong... You win!";
        document.getElementById("win").innerText = "Wins: " + win;

    } else if(userChoice != compGuess && compChoice.indexOf(userChoice) > -1){

        guesses--;
        document.getElementById("remaining").innerText = "Guesses Left: " + guesses;

    } else if(userChoice != compGuess && compChoice.indexOf(userChoice) > -1 && 0 == guesses){
        lose++;
        document.getElementById("loseMessage").innerText = "You... could use some psychic training. You lose";
        document.getElementById("lose").innerText = "Losses: " + lose;
    } else{
        document.getElementById("otherMessage").innerText = "I foresaw that you'd do something crazy like this. Please type a letter."    
    }


} //End major function

















/* Psuedo Code

1. Set up basic display:

    a. Set up HTML to display all counters, instructions, and title.
    b. Give ids to display counters so javaScript knows where to output

2. Retrieve user guess input
        i. Make an event trigger when the user presses/releases a key on the keyboard. (This will set everything else in motion.)
        ii. Make a variable with the string value of whatever key the user pressed  

3. Make app randomly pick letter
        i. Make an array of the alphabet
        ii. Make a variable that randomly selects an index 0-25 in the alphabet array
        
4. Compare random letter to user input
        i. Make a variable that compares random letter to user input
            
            IF they match, trigger win scenario 
            & log 1 point to win counter

            ELSE IF they don't match, trigger lose scenario
            & log 1 point to lose counter
            
            ELSE print message saying it's not a valid input (if input isn't in alphabet array)

4. Print inputs to page

    a. Wins (# of times user guessed letter correctly)
            i. Use the getElementById function thingy to print. Keep this in if statement so it goes up by 1 each time

    b. Losses (# of times user failed to guess letter after exhausting all guesses)
            i. Same concept as wins

    c. Guesses Left (# of guesses left. This will update)
            i. Same concept, except declare "guesses" variable with starting amount, and then i-- in "if" statement to decrease each time

    d. Your guesses so far (Specific letters that user typed. Display these until user either wins or loses)
            i. Print user input to the browser when user types a key

5. When player wins:
    a. Increase the wins counter
        IF user input is equal to randomly generated letter:
            Make "you win!" message
            Add one point to "win" counter
    b. Start game over again

6. When player loses:
    a. Increase losses counter
        Make "you lose" message
        Add one point to "lose" counter
    b. Restart game (same as when player wins)


*/