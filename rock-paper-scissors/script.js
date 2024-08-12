console.log("Hello World")
function getComputerChoice(){
    // randomly return rock paper or scissor
    // randomly generate number between 0 - 2
    // assign number to rock paper or scissor
    let computer_choice = getRandomInt(3);

    if(computer_choice === 0){return "rock"}
    if(computer_choice === 1){return "paper"}
    if(computer_choice === 2){return "scissors"}
}

console.log(getComputerChoice())


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getHumanChoice(){
    var user_choice = prompt("Rock (0), Paper (1), or Scissors(2)?");

    while(true ){
        if(user_choice === 0){return "rock"}
        else if(user_choice === 1){return "paper"}
        else if(user_choice === 2){return "scissors"}
        else{console.log("choose again")}
    }
}

function playRound(humanChoice, computerChoice){

}


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice)

function game(){

    var humanScore = 0;
    var computerScore = 0;


}