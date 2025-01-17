
console.log("Welcome!")

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');

const hImage = document.getElementById('humanImage');
const cImage = document.getElementById('computerImage');

const playerScore = document.getElementById('player-score');
const compScore = document.getElementById('computer-score');

const commentSection=document.getElementById("comment-line")

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', function() {
  location.reload();  
});




function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3) + 1; 
    if (randomValue === 1) {
        cImage.setAttribute("src", "images/rock.jpeg");

        return "rock";
    }

    else if (randomValue === 2) {
        cImage.setAttribute("src", "images/paper.jpg");



        return "paper";
    }
    else
        cImage.setAttribute("src", "images/scissor.jpg");

    return "scissors";
}






function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            hImage.setAttribute("src", "images/rock.jpeg")
        }
        else if (humanChoice == "paper") {
            hImage.setAttribute("src", "images/paper.jpg")
        }

        else {
            hImage.setAttribute("src", "images/scissor.jpg")
        }




        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
            commentSection.innerHTML=`Human wins! ${humanChoice} beats ${computerChoice}`;

            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
            commentSection.innerHTML=`Human wins! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
            commentSection.innerHTML=`Human wins! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else if (humanChoice == computerChoice) {
            console.log(`It's a draw! Both chose ${humanChoice}`);
            commentSection.innerHTML=`It's a draw! Both chose ${humanChoice}`;


        } else {
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
            commentSection.innerHTML=`Computer wins! ${computerChoice} beats ${humanChoice}`;

            computerScore++;
        }
        compScore.innerHTML = computerScore;
        playerScore.innerHTML = humanScore;
    }





    rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));

    paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
    scissorBtn.addEventListener('click', () => playRound("scissor", getComputerChoice()));

    compScore.innerHTML = computerScore;
    playerScore.innerHTML = humanScore;
    

    console.log(`Score -> Human ${humanScore} : ${computerScore} computer `)

}

playGame();