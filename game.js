class Game {
  constructor(gameType) {
    this.player = new Player('Human', '🧙‍♂️')
    this.computer = new Player('Computer', '💻')
    this.type = gameType
    this.fighters 
  }

  chooseGame(event) {
    if(event.target.closest('#classic')) {
      this.type = 'classic'
      this.fighters = ['📄' , '🪨' , '✄'] 
    } else {
        this.type = 'difficult'
        this.fighters = ['📄' , '🪨' , '✄' , '👽' , '🦎']
      }
  }

  checkForWinner(userChoice, computerChoice) {
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
    } else {
      return this.scoreCounter('computer')
    }
  }

  scoreCounter(whoWon) {
    if (whoWon === 'draw') {
      duringGameHeader.innerText = 'It was a draw, battle again!'
    } else if (whoWon === 'computer') {
      this.computer.wins += 1
      computerCounter.innerText = `Wins: ${this.computer.wins}`
      duringGameHeader.innerText =  'The computer won this round!'
    } else {
      this.player.wins += 1
      userCounter.innerText = `Wins: ${this.player.wins}`
      duringGameHeader.innerText =  'User won this round!'
    }
  }

  computerFighter() {
    var computerTurn = this.getRandomIndex(this.fighters)
    this.computer.takeTurn(computerTurn)
    return this.computer.fighter 
  }

  getRandomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
