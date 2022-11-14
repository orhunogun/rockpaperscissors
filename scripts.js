function getComputerChoice() {
    const RandomChoice = (Math.floor(Math.random() * 3))
    if (RandomChoice === 0){
        return "Rock";
    }
    else if (RandomChoice === 1){
        return "Paper";
    }
    else if (RandomChoice === 2){
        return "Scissors";
}
}

function rockPaperScissors(playerSelectionRaw) {
    playerSelectionRaw = prompt()
    const computerSelection = getComputerChoice().toLowerCase();
    const playerSelection = String(playerSelectionRaw).toLowerCase();
    if (playerSelection === computerSelection) {
        let result = "It's a draw!";
        return result;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        let result = "You won, " + playerSelection + " beats " + computerSelection + "!";
        return result;
    } else {
        let result = "You lose, " + computerSelection + " beats " + playerSelection + "!";
        return result;
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(rockPaperScissors());
    }
}
console.log(game())