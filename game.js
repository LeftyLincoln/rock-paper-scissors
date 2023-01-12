class Game {
  constructor(gameType) {
    // this.classicBoard = [rock, paper, scissors]
    // this.difficultBoard = [rock, paper, scissors, lizard, alien]
    this.player1 = new Player('Human', 🧙‍♂️)
    this.computer = new Player('Computer', 💻)
    this.type = gameType
  }

  //to track the data for the game board
  // way to see which game is selected
  chooseGame() {
    if(this.type === 'classic') {
      //display rock/paper/scissors
      return ('📄' , '🪨' , '✄')
    } else {
      //display rock/paper/scissors/alien/lizard
      return ('📄' , '🪨' , '✄' , '👽' , '🦎')
    }
  }

checkForWinner (userChoice, botChoice) {
  if (userChoice === botChoice) {
    return this.updateScore('draw')
  }
}

scoreCounter(whoWon) {
  if whoWon === 'draw' {
    return 'It was a draw, battle again!'
  } else if (whoWon === 'computer') {
    this.computer.wins += 1
    return 'The computer won this round!'
  } else {
    this.player.wins += 1
    return 'User won this round!'
  }
}






//way to reset the games board to begin a new game *function gameReset
gameReset() {
  //bring back to main page
  //reset counter
  }




setTimeout(function to run after timer ends, 2000) // -> call after each choice




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}








}
