``
// function randomly returns rock/paper/scissors. It simulates computers choice.
function getComputerChoice(){

    let symbol = [`rock`, `paper`, `scissors`]
    let choiceNumber = Math.floor(Math.random()*3)
    
    return symbol[choiceNumber]

}

function getPlayerChoice(){

    let symbol = prompt(`Choose your symbol: rock, paper or scissors`).toLowerCase();
    return symbol
}

//function that asks player to choose his symbol and then returns the winner of the round.
function playOneRound(){
    
    let computerSymbol = getComputerChoice()
    let humanSymbol = getPlayerChoice()

    // logic for choosing a winner of a round
    if(humanSymbol === computerSymbol){
        
        return `you both choose ${humanSymbol}, it is a tie`

    } else if (humanSymbol === `rock`){
        if(computerSymbol === `paper`){
            return `You lose. ${computerSymbol} beat ${humanSymbol}`
        } else {
            return `You win. ${humanSymbol} beat ${computerSymbol}`
        }
    } else if (humanSymbol === `paper`){
        if(computerSymbol === `scissors`){
            return `You lose. ${computerSymbol} beat ${humanSymbol}`
        } else {
            return `You win. ${humanSymbol} beat ${computerSymbol}`
        }
    } else if (humanSymbol === `scissors`){
        if(computerSymbol === `rock`){
            return `You lose. ${computerSymbol} beat ${humanSymbol}`
        } else {
            return `You win. ${humanSymbol} beat ${computerSymbol}`
        }
    } else {
        return `wrong input. Try again`
    }

}

function game(){
    let playerPoints = 0
    let computerPoints = 0
    let winner = null

    for(let i = 0; i < 5; i++){

         let roundResult = playOneRound()
         let winner = roundResult.split(`.`)

         if(winner[0] === `You win`){
            playerPoints++
         } else if(winner[0]===`You lose`){
            computerPoints++
         }

    }

    if(playerPoints>computerPoints){
        return(`You win. Final score: human: ${playerPoints} - ${computerPoints} :computer`)
    }
    else if(playerPoints<computerPoints){
        return(`You lose. Final score: human: ${playerPoints} - ${computerPoints} :computer`)
    } else {
        return (`It is a tie. Final score: human: ${playerPoints} - ${computerPoints} :computer`)
    }
    

}

game()



