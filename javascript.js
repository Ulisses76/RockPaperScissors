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
    
    
    if (computerSelection === playerSelection) {
        return "draw"
    }
    
    if (computerSelection === "rock") {
        if(playerSelection === "paper") {
            return "win" 
        }
        if (playerSelection === "scissor") {
            return "lose"
        }
    }
    
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "lose"
        }
        if (playerSelection === "scissor") {
            return "win"
        }
    }
    if (playerSelection === "rock") {
        return "win"
    } else {return "lose"}
}
function validBet() {
    let playerSelection ="";
    let checkValid = true;
    
    while (checkValid) {
        playerSelection = prompt("What's your bet");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection==="rock" || playerSelection ==="paper" || playerSelection=== "scissor") {
            checkValid = false;} else {alert ("wrong entry")}
    }   
    return playerSelection;
}
function game() {
    let scorePlayer=0;
    let scoreComputer=0;
      
    while (scorePlayer<5 && scoreComputer <5){
    let computerSelection = getComputerChoice();
    let playerSelection =validBet();
    let result=playRound (playerSelection,computerSelection);
        if (result ==="win") {
            scorePlayer++;
            console.log (`You win!!! ${playerSelection} beats ${computerSelection} !!`);
        } else if (result ==="lose") { 
            scoreComputer++
            console.log(`you lose!!! ${computerSelection} beats ${playerSelection} !!`)
        }
   
    }
    if (scoreComputer===5) {
        console.log("Computer wins!");
    } else {console.log("You wins!!!!!")}

    console.log(`score: You ${scorePlayer} x ${scoreComputer} Computer`)

}