``
// function randomly returns rock/paper/scissors. It simulates computers choice.
function getComputerChoice(){

    let symbol = [`rock`, `paper`, `scissors`]
    let choiceNumber = Math.floor(Math.random()*3)
    
    return symbol[choiceNumber]

}


    let computersPick = null
    let playersPick = null

//function that asks player to choose his symbol and then returns the winner of the round.
function playOneRound(computersPick, playersPick){
    
    

    // logic for choosing a winner of a round
    if(playersPick === computersPick){
        
        return `you both choose ${playersPick}, it is a tie`

    } else if (playersPick === `rock`){
        if(computersPick === `paper`){
            return `You lose. ${computersPick} beat ${playersPick}`
        } else {
            return `You win. ${playersPick} beat ${computersPick}`
        }
    } else if (playersPick === `paper`){
        if(computersPick === `scissors`){
            return `You lose. ${computersPick} beat ${playersPick}`
        } else {
            return `You win. ${playersPick} beat ${computersPick}`
        }
    } else if (playersPick === `scissors`){
        if(computersPick === `rock`){
            return `You lose. ${computersPick} beat ${playersPick}`
        } else {
            return `You win. ${playersPick} beat ${computersPick}`
        }
    } else {
        return `wrong input. Try again`
    }

}

const actionButtons = document.querySelectorAll('button');
actionButtons.forEach((button) =>
    button.addEventListener(`click`, humanPick(button.id)))

function humanPick(buttonId){
    const container = document.querySelector('#container');
    const playerPick = document.createElement('div');
    playerPick.classList.add('playersPick');
    playerPick.textContent = `Player picks: ${buttonId}` ;
    container.appendChild(playerPick);
}



const container = document.querySelector('#container');

const computerPick = document.createElement('div');
computerPick.classList.add('computerPick');
computerPick.textContent = `Computer picks: ${computersPick}`;
container.appendChild(computerPick);

const roundResult = document.createElement('div');
roundResult.classList.add('roundResult');
roundResult.textContent = playOneRound(computersPick,playersPick);
container.appendChild(roundResult);