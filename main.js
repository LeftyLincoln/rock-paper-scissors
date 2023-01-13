//
var game = new Game()



//DOM Variables
userSection = document.getElementById('userSection')
userCounter = document.getElementById('userCounter')
changeGameButton = document.getElementById('changeGameButton')
beforeGameHeader = document.getElementById('beforeGameHeader')
duringGameHeader = document.getElementById('duringGameHeader')
bothRules = document.getElementById('bothRules')
classicSection = document.getElementById('classic')
difficultSection = document.getElementById('difficult')
computerSection = document.getElementById('computerSection')
computerCounter = document.getElementById('computerCounter')
fightSection = document.getElementById('fightSection')
fighterIcons = document.querySelectorAll('.fighter-icons')


//Event Listeners
classicSection.addEventListener('click', loadClassicGame)
difficultSection.addEventListener('click', loadDifficultGame)
changeGameButton.addEventListener('click', changeGame)
fightSection.addEventListener('click', function(event) {chooseFighter(event)})


//Event Handlers
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
  console.log(event.target.id)
  var fighter = event.target.id  
  game.player.takeTurn(fighter)
  game.computerFighter()
  game.checkForWinner(game.player.fighter, game.computer.fighter)
  displayFighters(game.player, game.computer)
  

  //set time out and function to reset gameboard
}

function changeGame() {
  show(classic)
  show(difficult)
  show(beforeGameHeader)
  hide(duringGameHeader)
  hide(changeGameButton)
  hide(fightSection)
}



//Functions

function displayFighters(userChoice, computerChoice) {
  var fighterIcons = document.querySelectorAll('.fighter-icons')
  var playerFighter = document.getElementById(userChoice.fighter)
  var computerFighter = document.getElementById(computerChoice.fighter)

  for (var i = 0; i < fighterIcons.length; i++) {
    console.log(fighterIcons[i]);
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

function gameResetClassic() {
  setTimeout(loadClassicGame(), 2000)
}

function gameResetDifficult() {
  setTimeout(loadDifficultGame(), 2000)
}





