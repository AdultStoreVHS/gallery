//Top is blind attempt
//Create game function call
function playRound(){
    //get user input for PRC option
    let playerChoice = prompt('Select Rock paper or scissors').toLowerCase();

    //generate random number 0-2 for CPU choice
    let randomNumber = Math.floor(Math.random()*3);

    //select CPU choice based of random number
    let computerChoice;
    if(randomNumber == 0){
        computerChoice = 'rock';
    } else if (randomNumber == 1){
        computerChoice = 'paper'
    } else{
        computerChoice = 'scissors'
    }

    //compare Player vs CPU for result
    if(playerChoice == computerChoice){
        console.log('Draw');
    }else if( (playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'rock')){
        console.log('Player wins');
    }else { 
        console.log('Computer wins');
    }
}

//run game 5 times
for (let i = 0; i < 5; i++){
    playRound();
}