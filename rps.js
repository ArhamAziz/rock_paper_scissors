function computerPlay() {
    let v = Math.random();
    if (v <= 0.33) return "rock";
    if (v <= 0.66) return "paper";
    else return "scissors";
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "tie";
    else if (playerSelection == "rock" && computerSelection == "scissors") return "win";
    else if (playerSelection == "paper" && computerSelection == "rock") return "win";
    else if (playerSelection == "scissors" && computerSelection == "paper") return "win";
    else return "lose";
}
function game() {
    let score = 0;
    for (i = 1; i<= 5; i++) {
        let playerSelection = prompt("Enter input").toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result == "win") score++;
    }
    console.log(`Score: ${score}`);
}

game();