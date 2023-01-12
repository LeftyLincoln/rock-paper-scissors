
class Player {
  constructor(user, token) {
    this.name = user
    this.token = token
    this.wins = 0
    
  }

  takeTurn(player, gameType) {
    if (player === 'human') {
      return '📄'
    } else {
      return this.randomGenerator(gameType)
    }
  }


  randomGenerator(gameType) {
    var difficultOptions = ['🪨' , '📄', '✄', '👽', '🦎']
    var classicOptions =  ['🪨' , '📄', '✄']

    if (gameType === 'classic') {
      return classicOptions[this.getRandomIndex(classicOptions)]
    } else if (gameType === 'difficult') { 
      return difficultOptions[this.getRandomIndex(difficultOptions)]
    }
  }

    getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

}
