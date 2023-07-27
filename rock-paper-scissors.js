``
//SCORE

let playerScore = 0
let computerScore = 0


// function randomly returns rock/paper/scissors. It simulates computers choice.
function getComputerPick(){

    let symbol = [`rock`, `paper`, `scissors`]
    let choiceNumber = Math.floor(Math.random()*3)
    
    return symbol[choiceNumber]
}


//function that asks player to choose his symbol and then returns the winner of the round.
function pickWinner(playerPick, computerPick){
    
    if (playerPick === computerPick){    
        return `you both choose ${playerPick}, it is a tie`
    } else if  (playerPick === `rock`){
        if(computerPick === `paper`){
            computerScore++
            return `You lose. ${computerPick} beat ${playerPick}`
        } else {
            playerScore++
            return `You win. ${playerPick} beat ${computerPick}`
        }
    } else if  (playerPick === `paper`){
        if(computerPick === `scissors`){
            computerScore++
            return `You lose. ${computerPick} beat ${playerPick}`
        } else {
            playerScore++
            return `You win. ${playerPick} beat ${computerPick}`
        }
    } else if  (playerPick === `scissors`){
        if(computerPick === `rock`){
            computerScore++
            return `You lose. ${computerPick} beat ${playerPick}`
        } else {
            playerScore++
            return `You win. ${playerPick} beat ${computerPick}`
        }
    } else {
        return `wrong input. Try again`
    }

}



 
function playRound(myPick){

    if (playerScore > 4 || computerScore > 4){
        return
    }

    let computer = getComputerPick()
    let player = myPick
    let winner  = pickWinner(player, computer)
   

    const container = document.querySelector('#container');
    
    // update text
    computerPick.textContent = `Computer picks: ${computer}`;
    playerPick.textContent = `Player picks: ${player}`;
    winnerText.textContent = `${winner}`; 
    score.textContent = `PLAYER ${playerScore}:${computerScore} COMPUTER`;

    if (playerScore > 4 ){
        score.textContent = `CONGRATS YOU WIN !!!! ${playerScore}:${computerScore}`;
    } else if (computerScore > 4){
        score.textContent = `COMPUTER WINS THIS TIME ! ${playerScore}:${computerScore}`;
    }
}


// button click 
const actionButtons = document.querySelectorAll('button');
actionButtons.forEach((button) =>
    button.addEventListener(`click`, () =>
    {
        let player = button.id
        playRound(player)
        
    }))






// add text about computer pick
 const computerPick = document.createElement('div');
 computerPick.classList.add('pick');
 computerPick.textContent =` `;
 container.appendChild(computerPick);

  // add text about player pick
  const playerPick = document.createElement('div');
  playerPick.classList.add('pick');
  playerPick.textContent = ` `;
  container.appendChild(playerPick);

  // add text about who wins
  const winnerText = document.createElement('div');
  winnerText.classList.add('winnerText');
  winnerText.textContent = ` `;
  container.appendChild(winnerText);
  
// add text about current score
  const score = document.createElement('h3');
  score.classList.add('score');
  score.textContent = `PLAYER ${playerScore}:${computerScore} COMPUTER`;
  container.appendChild(score);


function playerPoint(){

}