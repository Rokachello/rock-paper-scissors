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


