var game = new Game()

var userSection = document.getElementById('userSection')
var userCounter = document.getElementById('userCounter')
var changeGameButton = document.getElementById('changeGameButton')
var beforeGameHeader = document.getElementById('beforeGameHeader')
var duringGameHeader = document.querySelector('.during-game-header')
var bothRules = document.getElementById('bothRules')
var classicSection = document.getElementById('classic')
var difficultSection = document.getElementById('difficult')
var computerSection = document.getElementById('computerSection')
var computerCounter = document.getElementById('computerCounter')
var fightSection = document.getElementById('fightSection')
var fighterIcons = document.querySelectorAll('.fighter-icons')

classicSection.addEventListener('click', loadClassicGame)
difficultSection.addEventListener('click', loadDifficultGame)
changeGameButton.addEventListener('click', changeGame)
fightSection.addEventListener('click', chooseFighter)

function loadClassicGame(event) {
  game.chooseGame(event)
  hide(classic)
  hide(difficult)
  hide(beforeGameHeader)
  show(changeGameButton)
  show(duringGameHeader) 
  classicFighters()
  show(fightSection)
}
  
function loadDifficultGame(event) {
  game.chooseGame(event)  
  hide(classic)
  hide(difficult)
  show(changeGameButton)
  hide(beforeGameHeader)
  show(duringGameHeader) 
  difficultFighters()
  show(fightSection)
}

function chooseFighter(event) {
  var fighter = event.target.closest('img').id  
  game.player.takeTurn(fighter)
  game.computerFighter()
  game.checkForWinner(game.player.fighter, game.computer.fighter)
  displayFighters(game.player, game.computer)
  fightSection.removeEventListener('click', chooseFighter)
  setTimeout(resetBoard, 3000)
  show(duringGameHeader) 
}

function changeGame() {
  show(classic)
  show(difficult)
  show(beforeGameHeader)
  hide(duringGameHeader)
  hide(changeGameButton)
  hide(fightSection)
}

function displayFighters(userChoice, computerChoice) {
  var fighterIcons = document.querySelectorAll('.fighter-icons')
  var playerFighter = document.getElementById(userChoice.fighter)
  var computerFighter = document.getElementById(computerChoice.fighter)

  for (var i = 0; i < fighterIcons.length; i++) {
    hide(fighterIcons[i])
  }
  show(playerFighter)
  show(computerFighter)  
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function classicFighters() {
  fightSection.innerHTML = 
    `<img class="fighter-icons" id="📄"src= "assets/happy-paper.png" alt="Piece of paper">
     <img class="fighter-icons" id="🪨"src= "assets/happy-rocks.png" alt="Happy rocks">
     <img class="fighter-icons" id="✄"src= "assets/lines-scissors.png" alt="Pair of scissors">`
}

function difficultFighters() {
  fightSection.innerHTML = 
    `<img class="fighter-icons" id="📄" src= "assets/happy-paper.png" alt="Piece of paper">
     <img class="fighter-icons" id="🪨"src= "assets/happy-rocks.png" alt="Happy rocks">
     <img class="fighter-icons" id="✄"src= "assets/lines-scissors.png" alt="Pair of scissors">
     <img class="fighter-icons" id="🦎"src= "assets/lizard.png" alt="Picture of lizard">
     <img class="fighter-icons" id="👽"src= "assets/ufo.png" alt="Picture of alien">`
}

function resetBoard() {
  var fighterIcons = document.querySelectorAll('.fighter-icons')
  for (var i = 0; i < fighterIcons.length; i++) {
    show(fighterIcons[i])
  }
  duringGameHeader.innerText = 'Choose your fighter!'
  fightSection.addEventListener('click', chooseFighter)
}