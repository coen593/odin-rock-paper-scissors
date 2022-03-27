function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    const number = Math.floor(Math.random() * 3)
    return options[number]
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')) {
        return 'p'
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 't'
    } else {
        return 'c'
    }
}

function game() {
    let computerScore = 0
    let playerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please enter your selection (rock, paper, scissors)')
        let computerSelection = computerPlay()
        let roundOutcome = playRound(playerSelection,computerSelection)
        if (roundOutcome === 'p') {
            console.log(`You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`)
            playerScore++
        } else if (roundOutcome === 'c') {
            console.log(`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`)
            computerScore++
        } else {
            console.log(`It's a tie! Both selected ${capitalizeFirstLetter(playerSelection)}`)
        }  
    }
    console.log(`Final score: player ${playerScore} - computer ${computerScore}`)
    if (playerScore > computerScore) {
        console.log('You win!')
    } else if (computerScore > playerScore) {
        console.log('You lose!')
    } else {
        console.log("It's a tie!")
    }
}

game()

