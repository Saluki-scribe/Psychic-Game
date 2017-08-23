
var win = 0, lose = 0, guesses = 9, soFar = [], currentCompGuess = [];


document.onkeyup = function psychicGame (event) {
    var userChoice = event.key;
    var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Calculate currentCompGuess      

if(guesses == 9){
var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)]; 
currentCompGuess.splice(0, 1, compGuess);
}

    console.log("Computer's choice: " + currentCompGuess + " " + " User's choice: " + userChoice);
    console.log("Index of: " + compChoice.indexOf(userChoice));

//If user wins

    if(userChoice == currentCompGuess){

        win++;
        document.getElementById("message").innerHTML = "<h2>Your psychic energy is strong... You win!</h2>";
        document.getElementById("win").innerText = "Wins: " + win;
        var i = userChoice;
        soFar.push(i);
        guesses = 9;
        soFar = [];
        document.getElementById("so-far").innerText = "Your Guesses so far: " + soFar;        
        document.getElementById("remaining").innerText = "Guesses Left: " + guesses;

//If user chooses wrong, but doesn't lose

    } else if(userChoice != currentCompGuess && compChoice.indexOf(userChoice) > -1 && 0 < guesses) {
        document.getElementById("message").innerText = " ";
        guesses--;
        document.getElementById("remaining").innerText = "Guesses Left: " + guesses;
        console.log("Guesses after decrement: " + guesses);
        var i = userChoice;
        soFar.push(" " + i + " ");
        document.getElementById("so-far").innerText = "Your Guesses so far: " + soFar;        


    }  else {
    //If user chooses key that isn't a letter
        
        document.getElementById("message").innerHTML = "<h2>I foresaw that you'd do something crazy like this. Please type a letter.</h2>"; 
    }

    //If user loses 

     if(userChoice != currentCompGuess && compChoice.indexOf(userChoice) > -1 && 0 == guesses){
        lose++;
        document.getElementById("message").innerHTML = "<h2>You... could use some psychic training. You lose.</h2>";
        document.getElementById("lose").innerText = "Losses: " + lose;
        //document.getElementById("so-far").innerText = "Your Guesses so far: " + userChoice;
        guesses = 9;
        soFar = [];
        document.getElementById("remaining").innerText = "Guesses left: " + guesses;
        
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