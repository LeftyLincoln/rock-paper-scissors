class Game {
  constructor(gameType) {
    this.player = new Player('Human', '🧙‍♂️')
    this.computer = new Player('Computer', '💻')
    this.type = gameType
  }

  chooseGame() {
    if(this.type === 'classic') {
      return ('📄' , '🪨' , '✄') 
    } else {
      return ('📄' , '🪨' , '✄' , '👽' , '🦎')
    }
  }

checkForWinner () {
var userChoice = this.player.takeTurn('human', this.type)
var computerChoice = this.computer.takeTurn('computer', this.type)  

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





















}
