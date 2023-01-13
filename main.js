//Global Variables

var displayAsset = {
  '📄' : 'assets/happy-paper.png',
  '🪨' : 'assets/happy-rocks.png',
  '✄' : 'assets/lines-scissors.png',
  '🦎': 'assets/lizard.png',
  '👽' : 'assets/ufo.png'
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
fightSection = document.getElementById('fightSection')
computerSection = document.getElementById('computerSection')
computerCounter = document.getElementById('computerCounter')

//Event Listeners
classicSection.addEventListener('click', loadClassicGame)
difficultSection.addEventListener('click', loadDifficultGame)
changeGameButton.addEventListener('click', changeGame)

//Event Handlers

function loadClassicGame() {
hide(classic)
hide(difficult)
hide(beforeGameHeader)
show(changeGameButton)
show(duringGameHeader)
}

function loadDifficultGame() {
hide(classic)
hide(difficult)
show(changeGameButton)
hide(beforeGameHeader)
show(duringGameHeader)
}

function changeGame() {
show(classic)
show(difficult)
show(beforeGameHeader)
hide(duringGameHeader)
hide(changeGameButton)
}





//Functions
function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}