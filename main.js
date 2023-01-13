//
var game = new Game()


var displayAsset = {
  '📄' : './assets/happy-paper.png',
  '🪨' : './assets/happy-rocks.png',
  '✄' : './assets/lines-scissors.png',
  '🦎': './assets/lizard.png',
  '👽' : './assets/ufo.png'
}


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

//Event Listeners
classicSection.addEventListener('click', loadClassicGame)
difficultSection.addEventListener('click', loadDifficultGame)
changeGameButton.addEventListener('click', changeGame)
fightSection.addEventListener('click', function(event) {chooseFighter(event)})


//Event Handlers

function chooseFighter(event) {
console.log(event.target)  
game.checkForWinner()
setTimeout(loadClassicGame, 2000)


}

function loadClassicGame() {
game.chooseGame()
hide(classic)
hide(difficult)
hide(beforeGameHeader)
show(changeGameButton)
show(duringGameHeader)
classicFighters()
show(fightSection)
}

function loadDifficultGame() {
game.chooseGame()  
hide(classic)
hide(difficult)
show(changeGameButton)
hide(beforeGameHeader)
show(duringGameHeader)
difficultFighters()
show(fightSection)
}

function changeGame() {
show(classic)
show(difficult)
show(beforeGameHeader)
hide(duringGameHeader)
hide(changeGameButton)
hide(fightSection)
}


function gameResetClassic() {
setTimeout(loadClassicGame(), 2000)

}

function gameResetDifficult() {
  setTimeout(loadDifficultGame(), 2000)
  
  }



//Functions
function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}


function classicFighters() {
  fightSection.innerHTML = 
    `<img src= "assets/happy-paper.png" alt="Piece of paper">
     <img src= "assets/happy-rocks.png" alt="Happy rocks">
     <img src= "assets/lines-scissors.png" alt="Pair of scissors">`
}


function difficultFighters() {
  fightSection.innerHTML = 
    `<img id="📄" src= "assets/happy-paper.png" alt="Piece of paper">
     <img id="🪨"src= "assets/happy-rocks.png" alt="Happy rocks">
     <img id="✄"src= "assets/lines-scissors.png" alt="Pair of scissors">
     <img id="🦎"src= "assets/lizard.png" alt="Picture of lizard">
     <img id=👽""src= "assets/ufo.png" alt="Picture of alien">`
}



// setTimeout(function to run after timer ends, 2000) // -> call after each choice
