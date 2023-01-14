class Player {
  constructor(user, token) {
    this.name = user
    this.token = token
    this.wins = 0
    this.fighter = undefined 
  }

  takeTurn(userChoice) {
    this.fighter = userChoice
  }
}
