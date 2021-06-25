
function calcCircumference(radius){
    let circumference = Math.PI*2*radius;
    return console.log(circumference);

}

function squareRoot(number){
   
    for (i=0; i<number; i++){
        if ((i*i)==number){
            return i;
        }
        
    }
    i="Does not contain a whole square number"
    console.log("You did not enter a number which has an exact square value")
}

function changeHTML(){
    let input = document.getElementById('userInput').value;
        
    squareRoot(input);
    document.getElementById("result").innerHTML=i;




}

let add7 = function(number){
    return console.log(number+7);

}

let multiply = (a,b) => console.log(a*b);

let capitalize = (string) =>{ 
    string = string.toLowerCase();
    firstLetter = string.charAt(0).toUpperCase();
    string = string.substring(1);
    string = firstLetter+string;
    return console.log(string);
}

let getLastLetter = (word) => {
    let x = word.length;
    let lastLetter = word.charAt(x-1);
    return console.log(lastLetter);
}

function roundPlay(){
    playerSelection = prompt("Write Rock, Paper Or Scissors");
    while (playerSelection !== "Rock" && playerSelection!=="Paper" && playerSelection!=="Scissors"){
        playerSelection = prompt("Invalid Option, Please enter Rock , Paper or Scissors");
    }
    computerSelection = Math.floor(Math.random()*3);

    let choices = ["Rock","Paper", "Scissors"];
    computerSelection = choices[computerSelection];

    console.log(`Your Choice Is ${playerSelection} and Opponents Choice is ${computerSelection}`);
    document.getElementById("result").innerHTML = `Your Choice Is ${playerSelection} and Opponents Choice is ${computerSelection}`;

   if (playerSelection==computerSelection){
       //return console.log("It's a tie")
       return document.getElementById("result").innerHTML = "It's a tie";
   } else if  (playerSelection=="Rock" && computerSelection=="Paper"){
        playerScore+=0;
        compScore+=1;
      // return console.log("Rock Looses to Paper")
      return document.getElementById("result").innerHTML = "Rock Looses to Paper";
       } else if (playerSelection=="Paper" && computerSelection=="Scissors"){
        playerScore+=0;
        compScore+=1;
           //return console.log("Paper Looses to Rock")
           return document.getElementById("result").innerHTML = "Paper Looses to Rock";
       } else if (playerSelection=="Scissors" && computerSelection=="Rock"){
        playerScore+=0;
        compScore+=1;
            //return console.log("Scissors Looses to Rock")
            return document.getElementById("result").innerHTML = "Scissors Looses to Rock";
       } else if (playerSelection=="Rock" && computerSelection=="Scissors"){
        playerScore+=1;
        compScore+=0;
           //return console.log("Rock Wins to Scissors")
           return document.getElementById("result").innerHTML = "Rock Wins to Scissors";
       } else if (playerSelection=="Paper" && computerSelection=="Rock"){
        playerScore+=1;
        compScore+=0;
           //return console.log("Paper Wins to Rock")
           return document.getElementById("result").innerHTML = "Paper Wins to Rock";
       } else if (playerSelection=="Scissors" && computerSelection=="Paper"){
        playerScore+=1;
        compScore+=0;
           //return console.log("Scissors Wins to Paper")
           return document.getElementById("result").innerHTML = "Scissors Wins to Paper";
       } 
   
}

var playerScore=0;
var compScore=0;

function game(){
    

    for (i=0; i<5; i++){
        roundPlay();
    }
    console.log(`Your Score is ${playerScore} and Computer Score is ${compScore}`)
    return document.getElementById("result").innerHTML = `Your Score is ${playerScore} and Computer Score is ${compScore}`;

}

game();