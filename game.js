class Game {
  constructor() {
    this.classicBoard = [rock, paper, scissors]
    this.difficultBoard = [rock, paper, scissors, lizard, alien]
    this.player1 = new Player(user, token, wins)
    this.player2 = new Player(user, token, wins)
  }

  //to track the data for the game board
  // way to see which game is selected
  chooseGame() {
    if(this.classicBoard) {
      console.log(this.classicBoard) //display rock paper scissors 
    } else {
      console.log(this.difficultBoard)  //display rock paper, scissors, lizard, alien
    }
  }


checkForWinner () {
  if (this.wins === 3) {
    //display overall winner
    //then pause game
    //reset game function
  }
}


checkForTie () {
//way to see if neither person wins => if choice === choice pause and then choose again
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
