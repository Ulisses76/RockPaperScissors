function getComputerChoice (){
    let num = Math.floor(Math.random()*99) + 1;
    if (num <= 33) {
        return "Paper";}
    else if (num <=66) {
        return "Rock";
    }
    else {return "Scissor"}
    }

function playRound (playerSelection,computerSelection) {
    playerSelection=playerSelection.toLowerCase ();
    computerSelection = computerSelection.toLowerCase ();
    
    if (playerSelection!="rock" && playerSelection !="paper" && playerSelection!= "scissor") {
        return "entrada inválida"
    } 

    if (computerSelection === playerSelection) {
        return "It's a draw !!"
    }
    
    if (computerSelection === "rock") {
        if(playerSelection === "paper") {
            return "You win!, paper beats rock!" 
        }
        if (playerSelection === "scissor") {
            return "you lose! rock beats scissor"
        }
    }
    
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "You lose! paper beats rock"
        }
        if (playerSelection === "scissor") {
            return "you win, scissor beats paper!"
        }
    }
    if (playerSelection === "rock") {
        return "You win! rock beats scissor"
    } else {return "You lose! scissor beats paper"}
}

function game() {
    for (let i = 0; i<5; i++) {
        let playerSelection = prompt("What's your bet");
        console.log (playRound (playerSelection,getComputerChoice()))
    }
}