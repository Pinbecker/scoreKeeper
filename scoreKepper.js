// Getting elements

var playerOne = document.getElementsByClassName("playerOne")[0];

var playerTwo = document.getElementsByClassName("playerTwo")[0];

var counter = document.getElementsByClassName("counter")[0];

var score = document.getElementsByClassName("score")[0];

var reset = document.getElementsByClassName("reset")[0];

var h1 = document.getElementById("myh1");

var playerOneColor = document.getElementsByClassName("playerOneColor")[0];

var playerTwoColor = document.getElementsByClassName("playerTwoColor")[0];

var p = document.getElementsByClassName("playingTo")[0];

//Setting scores

var playerOneScore = 0;

var playerTwoScore = 0;

var playingToNumber = 5;

//Listening for events

counter.addEventListener("change", function() {
    playingToNumber = Number(counter.value);
    p.innerText = "Playing to: " + Number(counter.value);
})

playerOne.addEventListener("click", function(){
    if(playerOneScore < playingToNumber && playerTwoScore !== playingToNumber){
      playerOneScore = playerOneScore + 1;
      playerOneColor.innerText = playerOneScore;
    } if(playerOneScore == playingToNumber) {
        colorChanger();
    }
});

playerTwo.addEventListener("click", function(){
    if(playerTwoScore < playingToNumber && playerOneScore !== playingToNumber){
    playerTwoScore = playerTwoScore + 1;
    playerTwoColor.innerText = playerTwoScore;
    } if(playerTwoScore == playingToNumber) {
        colorChanger();
    }
});

reset.addEventListener("click", function(){
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneColor.innerText = playerOneScore;
    playerTwoColor.innerText = playerTwoScore;
    playerOneColor.style.color = "black";
    playerTwoColor.style.color = "black";
});

//color of score to green

colorChanger = function() {
    if(playerOneScore === playingToNumber){
        playerOneColor.style.color = "green";
    };
    if(playerTwoScore === playingToNumber){
        playerTwoColor.style.color = "green";
    };
}





