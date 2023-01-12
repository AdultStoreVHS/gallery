
//elements
const playerScore = document.querySelector('.palyerScore');
const computerScore = document.querySelector('.computerScore');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const options = document.querySelector('.options');
const startBtn = document.querySelector('.start');

// get players choice
let playerChoice;
function getPlayer(){
    options.addEventListener('click',(e)=>playerChoice = e.target.innerHTML);
    return playerChoice;
}

//get computer choice 
let computerChoice;
function getComputer(){
    let randNum = Math.floor(Math.random()*3)
    if(randNum == 0){
        computerChoice = 'rock'
    } else if (randNum == 1){
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice;
}

//get winner
function getWinner(){
    getPlayer();
    getComputer();
    return (`${playerChoice} is like ${computerChoice}`);
}