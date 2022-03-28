const playerScoreboard = document.querySelector('#playerScore>h1')
const computerScoreboard = document.querySelector('#computerScore>h1')
const message = document.querySelector('#message')

let playerScore = 0
let computerScore = 0

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



function game() {
    // let computerScore = 0
    // let playerScore = 0
    // let playerSelection = ''
    // // while (!options.includes(playerSelection.toLowerCase())){
    // //     playerSelection = prompt('Please enter your selection (rock, paper, scissors)')
    // // }
    // let computerSelection = computerPlay()
    // let roundOutcome = playRound(playerSelection,computerSelection)
    // if (roundOutcome === 'p') {
    //     console.log(`You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`)
    //     playerScore++
    // } else if (roundOutcome === 'c') {
    //     console.log(`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`)
    //     computerScore++
    // } else {
    //     console.log(`It's a tie! Both selected ${capitalizeFirstLetter(playerSelection)}`)
    // }
    // playerSelection = ''  
    // console.log(`Final score: player ${playerScore} - computer ${computerScore}`)
    // if (playerScore > computerScore) {
    //     console.log('You win!')
    // } else if (computerScore > playerScore) {
    //     console.log('You lose!')
    // } else {
    //     console.log("It's a tie!")
    // }
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

const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay()
        const outcome = playRound(button.id, computerSelection)
        updateScoreMessage(outcome, button.id, computerSelection)
    })
})


