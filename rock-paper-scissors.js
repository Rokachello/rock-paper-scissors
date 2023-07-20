
// function randomly returns rock/paper/scissors. It simulates computers choice.
function getComputerChoice(){

    let sign = ["Rock", "Paper", "Scissors"]
    let choiceNumber = Math.floor(Math.random()*3)
    
    return sign[choiceNumber]
}
