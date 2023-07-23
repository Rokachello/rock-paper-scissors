``
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
            return `You lose. ${computerPick} beat ${playerPick}`
        } else {
            return `You win. ${playerPick} beat ${computerPick}`
        }
    } else if  (playerPick === `paper`){
        if(computerPick === `scissors`){
            return `You lose. ${computerPick} beat ${playerPick}`
        } else {
            return `You win. ${playerPick} beat ${computerPick}`
        }
    } else if  (playerPick === `scissors`){
        if(computerPick === `rock`){
            return `You lose. ${computerPick} beat ${playerPick}`
        } else {
            return `You win. ${playerPick} beat ${computerPick}`
        }
    } else {
        return `wrong input. Try again`
    }

}

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

function playRound(myPick){

    let computer = getComputerPick()
    let player = myPick
    let winner  = pickWinner(player, computer)

    const container = document.querySelector('#container');
    
    // update text
    computerPick.textContent = `Computer picks: ${computer}`;
    playerPick.textContent = `Player picks: ${player}`;
    winnerText.textContent = `${winner}`;

}



const actionButtons = document.querySelectorAll('button');
actionButtons.forEach((button) =>
    button.addEventListener(`click`, () =>
    {
        let player = button.id
        playRound(player)
    }))

