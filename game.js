class Game {
  constructor(gameType) {
    this.player = new Player('Human', '🧙‍♂️')
    this.computer = new Player('Computer', '💻')
    this.type = gameType
    this.fighters = undefined
  }

  chooseGame(event) {
    // console.log(event.target.id);
    if(event.target.closest('#classic')) {
      this.type = 'classic'
      this.fighters = ['📄' , '🪨' , '✄'] 
    } else {
      this.type = 'difficult'
       this.fighters = ['📄' , '🪨' , '✄' , '👽' , '🦎']
    }
  }

checkForWinner(userChoice, computerChoice) {
// var userChoice = this.player.takeTurn(this.fighters)
// var computerChoice = this.computer.takeTurn(this.fighters)  

  if (userChoice === computerChoice) {
    return this.scoreCounter('draw')
  } else if (computerChoice === '📄' && (userChoice === '✄' || userChoice === '🦎' )) {
    return this.scoreCounter('user')
  } else if (computerChoice === '🪨' && (userChoice === '📄' || userChoice === '👽')) {
    return this.scoreCounter('user')
  } else if (computerChoice === '✄' && (userChoice === '🪨' || userChoice === '👽')) {
    return this.scoreCounter('user')
  } else if (computerChoice === '👽' && (userChoice === '📄' || userChoice === '🦎')) {
    return this.scoreCounter('user')
  } else if (computerChoice === '🦎' && (userChoice === '🪨' || userChoice === '✄')) {
    return this.scoreCounter('user')
  }
    else {
    return this.scoreCounter('computer')
  }
}

scoreCounter(whoWon) {
  if (whoWon === 'draw') {
    return 'It was a draw, battle again!'
  } else if (whoWon === 'computer') {
    this.computer.wins += 1
    computerCounter.innerText = `Wins: ${this.computer.wins}`
    return 'The computer won this round!'
  } else {
    this.player.wins += 1
    userCounter.innerText = `Wins: ${this.player.wins}`
    return 'User won this round!'
  }
}


computerFighter() {
  var computerTurn = this.getRandomIndex(this.fighters)
  this.computer.takeTurn(computerTurn)
  return this.computer.choice 
}

getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}




// randomGenerator(gameType) {
//   // var difficultOptions = ['🪨' , '📄', '✄', '👽', '🦎']
//   // var classicOptions =  ['🪨' , '📄', '✄']


//     this.getRandomIndex(this.fighters)
//   } else if (gameType === 'difficult') { 
//     return difficultOptions[this.getRandomIndex(difficultOptions)]
//   }
// }










}
