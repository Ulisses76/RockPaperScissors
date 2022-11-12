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

    playerSelection=playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    
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
        if (playerSelection==="rock" || playerSelection ==="paper" ||
            playerSelection=== "scissor") {
            checkValid = false;} else {alert ("wrong entry")}
    }   
    return playerSelection;
}

function venceu (aposta,computerChoise) {
    console.log('VENCEU')
    document.getElementById("results").textContent = "You WIN !!!"+
    "   "+aposta + "   beats   " + computerChoise;

}
function perdeu (aposta,computerChoise) {
   
    document.getElementById("results").textContent = "You LOSE !!!"+
    "   "+computerChoise + "   beats   " + aposta;
}
function draw() {
    document.getElementById("results").textContent = 
"It's a DRAW !!!";}

function lose(){
document.getElementById('results').textContent = "YOU LOSE THE ROUND !!!"
};

function win (){
    document.getElementById('results').textContent = "YOU WIN THE ROUND !!!"
};

const beta = document.querySelectorAll('.container button');
let scorePlayer=0;
let scoreComputer=0;

  
beta.forEach(buton => buton.addEventListener('click',function (a) {
    aposta = a.target.classList.value;   
    const computerChoice = getComputerChoice();
    document.getElementById("computerChoice").textContent = computerChoice
    const result=playRound (aposta,computerChoice);  
    if (result === "win") {
        scorePlayer++;
        venceu(aposta,computerChoice);
    }
    if (result === "lose") {
        scoreComputer++;
        perdeu(aposta,computerChoice);
    }
    if (result ==="draw") {
        draw();
    }
    
    document.getElementById('scorePlayer').textContent = scorePlayer;
    document.getElementById('scoreComputer').textContent = scoreComputer;
    
    if (scorePlayer===5 || scoreComputer ===5) {
        if (scoreComputer===5) {
            lose();
        }
        if (scorePlayer===5) {
            win ();
        }
        scoreComputer=0;
        scorePlayer=0;

    }
    
}));
document.getElementById('scorePlayer').textContent = scorePlayer;
document.getElementById('scoreComputer').textContent = scoreComputer;






       
