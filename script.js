const playerScoreboard = document.querySelector('#playerScore>h1')
const computerScoreboard = document.querySelector('#computerScore>h1')
const message = document.querySelector('#message')
const modal = document.querySelector('.modal')
const playAgain = document.querySelector('button')
const modalOutcome = document.querySelector('#outcome')
const finalScore = document.querySelector('#finalScore')

let playerScore = 0
let computerScore = 0
let isGameOver = false

function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    const number = Math.floor(Math.random() * 3)
    return options[number]
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || 
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') || 
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++
        return 'p'
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 't'
    } else {
        computerScore++
        return 'c'
    }
}

function updateScoreMessage(outcome, playerSelection, computerSelection) {
    if (outcome === 't') {
        message.innerHTML = `It's a tie! Both selected ${capitalizeFirstLetter(playerSelection)}.`
    } else if (outcome === 'p') {
        message.innerHTML = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`
        playerScoreboard.innerHTML = playerScore
    } else {
        message.innerHTML = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`
        computerScoreboard.innerHTML = computerScore
    }
}

const showModal = () => {
    modal.classList.add('active')
    if (computerScore === 5) {
        modalOutcome.innerHTML = 'You lose...'
    } else {
        modalOutcome.innerHTML = 'You win!'
    }
    finalScore.innerHTML = `You ${playerScore} - ${computerScore} computer`
}

const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (isGameOver) {
            return
        }
        const computerSelection = computerPlay()
        const outcome = playRound(button.id, computerSelection)
        updateScoreMessage(outcome, button.id, computerSelection)
        if (computerScore === 5 | playerScore === 5) {
            isGameOver = true
            showModal()
        }
    })
})

playAgain.addEventListener('click', () => {
    modal.classList.remove('active')
    playerScore = 0
    computerScore = 0
    message.innerHTML = 'Best of 5 wins!'
    computerScoreboard.innerHTML = computerScore
    playerScoreboard.innerHTML = playerScore
    isGameOver = false
})


