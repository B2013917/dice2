
var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elComeOut       = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);
  var mySound = new sound("Tieng-xuc-xac.mp3");
  // var mySound = new sound("sounds/071950_dice-rolling-88974.mp3");
  mySound.play();
 
  //console.log(diceOne + ' ' + diceTwo);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  } 
  //setTimeout(result(diceOne,diceTwo),5000);
  setTimeout(result,1000,diceOne,diceTwo);
  
  //setTimeout(rollDice(), 1000);
  
}

function result(diceOne,diceTwo) {
  //If player 1 wins
  if (diceOne > diceTwo) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  else if (diceTwo > diceOne) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}