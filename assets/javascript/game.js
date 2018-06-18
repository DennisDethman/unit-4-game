//globals needed: 

//Random number to start game (19-120)
//one for each "crystal" to store value (1-12)
//crystal total value 
//losses
//wins
//audio?  ^^^do these first
var gameNumber;
var cup1;
var cup2;
var cup3;
var cup4;
var cupValue = 0; 

var losses = 0;
var wins = 0;

//**********************************************************************************
//TODO:
//five random numbers.  ---- one for game, 4 for player
//19-120 for match, 1-12 for player
//add crystal numbers together
//if win/ if lose
//else? -- max wins/losses have been reached, restart game
//reset
//i'm sure there's more
$(document).ready(function(){
       
    function start (){
        gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//        console.log("random number is " + gameNumber);   //good to go
        
        cup1 = Math.floor(Math.random() * 12) + 1;
//        console.log("cup1 = " + cup1);                 //works, confirmed 1-12
        cup2 = Math.floor(Math.random() * 12) + 1;
//        console.log("cup2 = " + cup2);                 //works, confirmed 1-12
        cup3 = Math.floor(Math.random() * 12) + 1;
//        console.log("cup3 = " + cup3);                 //works, confirmed 1-12
        cup4 = Math.floor(Math.random() * 12) + 1;
//        console.log("cup4 = " + cup4);                 //works, confirmed 1-12
        
        //on screen
        $("#gameNum").html(gameNumber);
        
        
//        $("#gp1").html(cup1);
//        $("#gp2").html(cup2);
//        $("#gp3").html(cup3);
//        $("#gp4").html(cup4);
        
    }
       
 //**********************************************************************************
    
    function playerTotal () {
           $("#gp1").on("click", function() {
               cupValue += cup1;
               $("#playerNum").html(cupValue);
               checkScore();
//               console.log("cup val = " + cupValue)
           })
        
           $("#gp2").on("click", function() {
               cupValue += cup2;
               $("#playerNum").html(cupValue);
               checkScore();
//               console.log("cup val = " + cupValue)
           })
        
           $("#gp3").on("click", function() {
               cupValue += cup3;
               $("#playerNum").html(cupValue);
               checkScore();
//               console.log("cup val = " + cupValue)
           })
        
           $("#gp4").on("click", function() {
               cupValue += cup4;
               $("#playerNum").html(cupValue);
               checkScore();
//               console.log("cup val = " + cupValue)
           })
        
       } 
        
        
 //**********************************************************************************   

    function checkScore (){
        if (cupValue === gameNumber){
            wins++;
            $("#wins").html(wins);
//            console.log("wins = " + wins)
            cupValue = 0;
            start();
        }
        
        if (cupValue > gameNumber){
            losses++;
            $("#losses").html(losses);
//            console.log("losses = " + losses)
            cupValue = 0;
            start();
        }
        
        if ((losses === 5) || (wins === 5)) {
            resetGame();        
        }
        

    }
    
 //**********************************************************************************   
    
    function resetGame () {
        cupValue = 0;
        
        losses = 0;
        $("#losses").html(losses);
        wins = 0;
        $("#wins").html(wins);

    }
    
start(); 
playerTotal();    
    
});




















