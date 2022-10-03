const computerchoicedisplay = document.getElementById('computer-ch')
const userchoicedisplay = document.getElementById('user-ch')
const resultDisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
const scoreDisplay = document.getElementById('score')
const chancesDisplay = document.getElementById('chances')
let userchoice
let computerch
let result
let score = 0
let chances = 0
const value = ['Rock', 'Paper', 'Scissors']

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userchoice = e.target.innerHTML
    userchoicedisplay.innerHTML = userchoice
    chancesNumber()
    computerchoice()
    getResult()
}))


function chancesNumber(){
    chances = chances + 1
    chancesDisplay.innerHTML = chances
    if(chances > 10){
        chancesDisplay.innerHTML = "Chances are Over"
    }
}

function computerchoice() {
    const randomNumber = Math.floor(Math.random() * possiblechoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerch = value[0]
    }
    if (randomNumber === 2) {
        computerch = value[1]
    }
    if (randomNumber === 3) {
        computerch = value[2]
    }
    computerchoicedisplay.innerHTML = computerch
    console.log(computerch)
}

function getResult() {
    if (computerch === userchoice) {
        result = 'Its a draw!'
    }
    if (computerch === 'Rock' && userchoice === 'Paper') {
        result = 'You Win'
        score = score + 1
    }
    if (computerch === 'Rock' && userchoice === 'Scissors') {
        result = 'You Lost'
    }
    if (computerch === 'Paper' && userchoice === 'Scissors') {
        result = 'You Win'
        score = score + 1
    }
    if (computerch === 'Paper' && userchoice === 'Rock') {
        result = 'You Lost'
    }
    if (computerch === 'Scissors' && userchoice === 'Rock') {
        result = 'You Win'
        score = score + 1
    }
    if (computerch === 'Scissors' && userchoice === 'Paper') {
        result = 'You Lost'
    }
    console.log(result)
    resultDisplay.innerHTML = result
    if(chances<=10){
        scoreDisplay.innerHTML = score
    }else{
        scoreDisplay.innerHTML = 0
    }
   
}

function resetScore(){
    score = 0
    scoreDisplay.innerHTML = score
    chances = 0
    chancesDisplay.innerHTML = chances
}