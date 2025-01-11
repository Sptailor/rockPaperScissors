
console.log("Welcome!")
function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3) + 1; // Generates a random integer: 1, 2, or 3
    if (randomValue === 1) return "rock";
    if (randomValue === 2) return "paper";
    return "scissors";
}


function getHumanChoice() {
 

        let choice = prompt("Select rock, paper, or scissors").toLowerCase(); 
    
        return choice;
      
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log(`Human wins! ${humanChoice.toLowerCase()} beats ${computerChoice}`);
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`Human wins! ${humanChoice.toLowerCase()} beats ${computerChoice}`);
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log(`Human wins! ${humanChoice.toLowerCase()} beats ${computerChoice}`);
            humanScore++;
        } else if (humanChoice == computerChoice) {
            console.log(`It's a draw! Both chose ${humanChoice}`);
           
        } else {
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice.toLowerCase()}`);
            computerScore++;
        }
    }
        
    
    for (let i=0; i<5; i++) {
        let newComputerChoice = getComputerChoice()
        let newHumanChoice = getHumanChoice()
        playRound(newHumanChoice, newComputerChoice)
        console.log(`Score: Human ${humanScore} : ${computerScore} computer`)
    }
    console.log(`Final Score -> Human ${humanScore} : ${computerScore} computer `)

}

playGame();