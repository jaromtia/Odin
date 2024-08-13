console.log("Hello World")
function getComputerChoice(){
    // randomly return rock paper or scissor
    // randomly generate number between 0 - 2
    // assign number to rock paper or scissor
    let computer_choice = getRandomInt(3);

    if(computer_choice === 0){return "rock";}
    if(computer_choice === 1){return "paper";}
    if(computer_choice === 2){return "scissors";}
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getHumanChoice(){
    let user_choice = prompt("Rock (0), Paper (1), or Scissors(2)?");

    
    if(user_choice === 0){return "rock";}
    else if(user_choice === 1){return "paper";}
    else if(user_choice === 2){return "scissors";}
    else{console.log("Make sure to enter a number between 0-2 again");}
}

function getScore(whoWon){
    let computerScore = 0;
    let humanScore = 0;
    if(whoWon === "computer"){computerScore += 1;}
    if(whoWon === "human"){humanScore += 1;}
    return console.log("Human score: " + humanWins + '\n' + "Computer score: " + computerWins + '\n');

}

function playRound(humanChoice, computerChoice){
/*
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.
*/


    for (let index = 0; index < 5; index++) {
        if(humanChoice === 'rock' && computerChoice === 'paper'){console.log("Computer wins!"); getScore("computer");}
        if(humanChoice === 'rock' && computerChoice === 'scissors'){console.log("Human wins!"); getScore("human");}
        if(humanChoice === 'paper' && computerChoice === 'rock'){console.log("Human Wins!"); getScore("human");}
        if(humanChoice === 'scissors' && computerChoice === 'rock'){console.log("Computer wins!"); getScore("computer");}
        if(humanChoice === 'rock' && computerChoice === 'rock'){console.log("No one wins!"_);}
        if(humanChoice === 'paper' && computerChoice === 'paper'){console.log("No one wins!");}
        if(humanChoice === 'scissors' && computerChoice === 'scissors'){console.log("No one wins!");}
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


function playGame(){
    let computerWins = 0;
    let humanWins = 0;

    for (let index = 0; index < 5; index++) {
        playRound(humanChoice, computerChoice);
    }
}

playGame();