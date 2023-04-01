// create const for scoreing
// set score for both players
// create selector for playing to 
// create variables for player buttons + event listeners
// create variable for reset button + event listeners

const score = document.querySelector('#score')
const playingTo = document.querySelector('#playing-to')
const playerOneBtn = document.querySelector('#player-one-btn')
const playerTwoBtn = document.querySelector('#player-two-btn')
const resetBtn = document.querySelector('#reset-btn')
let playerOneScore = 0;
let playerTwoScore = 0;
let winner = false;



const updateScore = () => {
    score.innerText = `${playerOneScore} to ${playerTwoScore}` 
}

playerOneBtn.addEventListener("click", function(){
    if (winner === false){
    let winGame = playingTo.value;
    if (playerOneScore === parseInt(winGame)){
        console.log('you win!!')
        winner = true;
        return 
    }
    playerOneScore ++;
    updateScore()
}

})
playerTwoBtn.addEventListener("click", function(){
    if (winner === false){
    let winGame = playingTo.value;
    if (playerTwoScore === parseInt(winGame)){
        console.log("you win!!")
        winner = true;
        return
    }
    playerTwoScore ++;
    updateScore()
}
})

resetBtn.addEventListener('click', function(){
    playerOneScore = 0;
    playerTwoScore = 0;
    score.innerText = `${playerOneScore} to ${playerTwoScore}`
    playingTo.value = 1;
    winner = false;

})




