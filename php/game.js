'use strict';

// ++++++++ DATA +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var roundCount;
var endGameScore = [0];
var currentWordScramble;
var shuffledList = [];

// // Globals Variables for swap animations
var oldWordScramble;
var newWordScramble;
var SWAPSPEED = 3.5;
var SWAPYAMPLITUDE = 2;
var score = 0;
var count = 0;

// // Global Variables for Timer
var timeInterval;
var timer; // pointer to setInterval for stopping and starting timer

var updateInterval = 10; // time in ms between renders
var startTime; // time user begins playing

var initialTimeAllowed = 3600 * 2 * 1000; // start time at beginning in ms
var maxTimeAllowed = 3600 * 5 * 1000; // max allowed time in ms

var timeLeft = initialTimeAllowed; // remaining time
var bonusTime = 0; // accumulated bonus time in ms
var penaltyTime = 0; // accumulated time penalty
var started = false; // tracks whether the game is started for initial render

// // Global Variables for Canvas & Canvas Creation

var canvasEl = document.getElementById('canvas');
var ctx = canvasEl.getContext("2d");
ctx.font = "75px 'Overpass Mono'";

var letterSpacing = 20;
var letterWidth = 35;

var animate;
var allLetters = [];
var wordArray = [];
var UPDATEINTERVAL = 10; //ms

var hr=0,mn=0,sec=0;

// // Global Variables for Word Shuffle/Scramble
var scrambleSubmission = document.getElementById('scramble-submit');
var input = document.getElementById('input');

// // DOM Element selection
//document.getElementsByTagName('li')[1].classList.add('selectedPage')
var startGameButton = document.getElementById('startGame');


// // EVENT Listeners
document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('skipWord').addEventListener('click', skipWord);
document.getElementById('shuffle').addEventListener('click', swapLetters);


// // Listener to make input form uppercase
document.getElementById('input').addEventListener('keypress', forceKeyPressUppercase, false);


// ++++++++++++++++ Function Declarations ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// helper functions
function resetFocus() {
  document.getElementById('input').focus();
}

function restrictInput() {
  // var inputBox = document.getElementById('input');
//   inputBox.setAttribute('maxlength', '10');
}

function hide(element, hiddenOrNone) {
  if (hiddenOrNone === 'hidden') {
    element.style.visibility = 'hidden';
  } else if (hiddenOrNone === 'none') {
    element.style.display = 'none';
  } else {
    // console.log('wrong hiddenOrNone argument')
  }
}

function unHide(element) {
  element.style.visibility = 'visible';
}

function clearInput() {
  input.value = '';
}

//+++ Timer functions
function resetTimer() {
  // disable interval function calls
  timeLeft = initialTimeAllowed; // remaining time
  bonusTime = 0; // accumulated bonus time in ms
  penaltyTime = 0; // accumulated time penalty

  clearInterval(timer);
  started = false;
  bonusTime = 0;
  renderTimer();
}

function startTimer() {
  if (!started) {
    startTime = Date.now();
  }
  started = true;
 // timer = setInterval(renderTimer, updateInterval);

 
}

function addTime() {
  bonusTime = bonusTime + 15000;
  // cap bonus time
  var maxBonusTime = maxTimeAllowed - initialTimeAllowed;
  if (bonusTime > maxBonusTime) {
    bonusTime = maxBonusTime;
  }
  renderTimer();
}

function getTwoDigit(num)
{
	var value = "";

	return num >= 10 ? String(num) : "0" + String(num);  
}

function getTime()
{
	var timeVal = "Time: ";

	sec++;

	if(sec == 60)
	{
		mn++;
		sec = 0;
	}

	if(mn == 60)
	{
		hr++;
		mn = 0;
	}

	return timeVal + getTwoDigit(hr) + ":" + getTwoDigit(mn) + ":" + getTwoDigit(sec);
}

function subTime() {
  penaltyTime = penaltyTime + 15000;
  renderTimer();
}

function renderTimer() {
  // if game hasn't started render 0 sec time elapsed
  var timeElapsed;
  if (started) {
    timeElapsed = Date.now() - startTime;
  } else {
    timeElapsed = 0;
  }

  // ~~~~~~ main decrement time ~~~~~~~~~
  timeLeft = initialTimeAllowed - timeElapsed + bonusTime - penaltyTime;

  // game over
  if (timeLeft < 0) {
    timeLeft = 0;
    clearInterval(timer); // cancel constant timer calls to this function
    endGame();
    clearInterval(timeInterval)
  }

  // if too much bonus time
  if (timeLeft > maxTimeAllowed) {
    // calculate extra bonus time
    var extraBonusTime = timeLeft - maxTimeAllowed;

    //remove the exess bonus time
    bonusTime = bonusTime - extraBonusTime;

    // cap time left
    timeLeft = maxTimeAllowed;
  }

  // time bar
//  document.getElementById('timerBar').style.width = `${(timeLeft /
//     maxTimeAllowed) * 600}px`;
}

//Letter Swapping/Shuffling
function swapLetters() {
  if (started){
    oldWordScramble = currentWordScramble;
    newWordScramble = scrambledWord(roundCount).toUpperCase();
    handleSwapButton();
  }
}

function skipWord() {
  
  if (started){
    
    clearInput();
    subTime();
    roundCount++;
    currentWordScramble = scrambledWord(roundCount).toUpperCase();
    initializeCanvasWithANewWord(currentWordScramble);  // added
  
    document.getElementById('alerts').innerHTML = `Looks like you had a whale of a time with that one. The correct answer was ${shuffledList[roundCount - 1].toUpperCase()}.`;
    resetFocus();
    count++;

    console.log(count)
    if(count == 20)
    {
      clearInterval(timeInterval);
      
      let msg = document.getElementById("gameMode").innerHTML == "0" ? "Thanks for completing the game. Your score hase been taken." : "Thanks for completing the game."; 

      count = 0;
      $.confirm({
       title: 'Alert!',
       type:'red',
       useBootstrap:false,
       content: msg,
       buttons: {
           back: function () {
               window.location.replace('./select-game.html')
           }
       }
   });
   
    }
  }
}

Array.prototype.shuffle = function (array1) {
  this.splice(0, this.length); // clear all items in this array
  var array2 = array1.slice(0); // make a copy of array1 in array2

  while (array2.length > 0) {
    var i = Math.floor(Math.random() * array2.length); //i = random index of arry
    this.push(array2[i]); //add array2[i] to this
    array2.splice(i, 1); //cut i from array2
  }
};

function scrambledWord(roundNumber) {
  var word = shuffledList[roundNumber];
  var letterArray = Array.from(word);
  var shuffledWord = [];

  console.log(word);

  shuffledWord.shuffle(letterArray);
  shuffledWord = shuffledWord.join(''); //turn into string for the check
  
  while (shuffledWord === word) {
    shuffledWord = shuffledWord.split(''); //turn into array
    shuffledWord.shuffle(letterArray);    //reshuffle
    shuffledWord = shuffledWord.join(''); //turn into string for the check
  }
  
  if(shuffledWord.length > 8)
        document.getElementById('input').style.fontSize = '25px';
     else
        document.getElementById('input').style.fontSize = '50px';
  
  return shuffledWord;
}

function checkAnagram(altWord) {
  if (anagramList.includes(altWord.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

//Button & Input Functionality
var handleScrambleSubmission = function (event) {
  if (input.value === '') {
    handleWiggleButton(); // add wiggle
    document.getElementById('alerts').innerHTML = 'Field cannot be empty';

  } else if (input.value === shuffledList[roundCount].toUpperCase()) {
    document.getElementById('alerts').innerHTML = `We're happy as a clam that you guessed ${
      input.value} correctly!`;
    clearInput();
    addTime();
    calcScore();
    updateScoreCounter();
    roundCount++;
    currentWordScramble = scrambledWord(roundCount).toUpperCase();
    initializeCanvasWithANewWord(currentWordScramble);
    resetFocus();

  } else if (checkAnagram(input.value)) {
    handleWiggleButton(); // add wiggle
    document.getElementById('alerts').innerHTML = `We know you're feeling salty that we didn't accept ${input.value}. Try something with an Oceanic theme.`;
    clearInput();
    resetFocus();

  } else if (input.value !== shuffledList[roundCount].toUpperCase()) {
    handleWiggleButton(); // add wiggle
    document.getElementById('alerts').innerHTML = `Nice try, but ${input.value} didn't seal the deal.`;
    clearInput();
    resetFocus();
  }
};

function activateSkip(){
  document.getElementById('skipWord').addEventListener('click', skipWord);
}

function deactivateSkip() {
  document.getElementById('skipWord').removeEventListener('click', skipWord);
  document.getElementById('skipWord').disabled = true;
}

function activateSubmission() {
  scrambleSubmission.addEventListener('click', handleScrambleSubmission);
  input.addEventListener('keyup', function (e) {
    if (e.which === 13) {
      handleScrambleSubmission();
      event.preventDefault();
    }
  });
}

function deactivateSubmission() {
  scrambleSubmission.removeEventListener('click', handleScrambleSubmission);
  document.getElementById('input').disabled = true;
}

document.onkeydown = function (e) {
  if (e.which === 40) {
    skipWord();
  } else if ((e.which === 38)) {
    swapLetters();
  }
};

function forceKeyPressUppercase(e) {
  var charInput = e.keyCode;
  if (charInput >= 97 && charInput <= 122) {
    // lowercase
    if (!e.ctrlKey && !e.shiftKey && !e.metaKey && !e.altKEY) {
      // no modifier key
      var newChar = charInput - 32;
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      e.target.value =
        e.target.value.substring(0, start) +
        String.fromCharCode(newChar) +
        e.target.value.substring(end);
      e.target.setSelectionRange(start + 1, start + 1);
      e.preventDefault();
    }
  }
}

function displayNewWord() {
  var scramP = document.getElementById("scrambleP");
  scramP.innerHTML = scrambledWord(roundCount).toUpperCase();
}

function restartGame() {
  var restartResult = window.confirm('Are you sure you want to restart the game and lose your current score?');
  if (restartResult === true){
    window.location.href = 'game.html';
  }
}

function activateRestart() {
  var restartGameButton = document.getElementById('restartGame');
  restartGameButton.addEventListener('click', restartGame);
  unHide(document.getElementById('restartGame'));
}

//End Game & Initialize Game
function startGame() {
  startTimer();
  roundCount = 0;
  currentWordScramble = scrambledWord(roundCount).toUpperCase();
  restrictInput();
  clearInput();
  initializeCanvasWithANewWord(currentWordScramble);  // added
  activateSubmission();
  createScoreCounter();
  input.removeAttribute('disabled');
  resetFocus();
  activateSkip();
  hide(startGameButton, 'none');
  activateRestart();

  timeInterval = setInterval(()=>{
		var timerTxt = document.getElementById("timerTxt");
		timerTxt.innerHTML = getTime();
	},1000);

}

function endGame() {
  endGameDataCollection();
  deactivateSubmission();
  deactivateSkip();
  endGameStyling();
  started = false;
  clearInput();
}

function endGameStyling() {
  document.getElementById('gameSpace').style.backgroundColor = 'lightblue';
  document.getElementById('gameSpace').style.borderColor = 'navy';
  //document.getElementById('timerBar').style.visibility = 'hidden';
  document.getElementById ('canvas').style.display = 'none';
}

function endGameDataCollection() {
  document.getElementById('scrambleP').style.display = 'none';
  var pEl = document.createElement('p');
  // pEl.setAttribute('id', 'endGameP');
  // pEl.textContent = `Whale played! You got a score of ${endGameScore[0]}! Submit your name to see if you're the biggest fish in the sea.`;
  // document.getElementById('gameSpace').appendChild(pEl);
  createEndGame();
}

function createEndGame() {
  var gameSpace = document.getElementById('gameSpace');

  // var inputEl = document.createElement('input');
  // inputEl.setAttribute('id', 'userName');
  // inputEl.setAttribute('name', 'userName');
  // inputEl.setAttribute('maxlength', '10');
  // inputEl.textContent = '';
  // gameSpace.appendChild(inputEl);

  // var submitEl = document.createElement('button');
  // submitEl.setAttribute('id', 'submit-score');
  // submitEl.textContent = 'Submit Score';
  // gameSpace.appendChild(submitEl);

  // var pEl = document.createElement('p');
  // pEl.setAttribute('id', 'end-game-alert');
  // pEl.textContent = '';
  // gameSpace.appendChild(pEl);
  activateEndGameInput();
}

function activateEndGameInput() {
  var submitEl = document.getElementById('submit-score');
  var inputEl = document.getElementById('userName');
  //submitEl.addEventListener('click', handleSubmitScore);
  // inputEl.addEventListener('keyup', function (e) {
  //   if (e.which === 13) {
  //     handleSubmitScore();
  //   }
  // });
}

function handleSubmitScore(event) {
  var inputEl = document.getElementById('userName');
  var name = inputEl.value;
  if (name === '') {
    document.getElementById('end-game-alert').innerHTML = 'Field cannot be empty';
  } else {
    endGameScore.unshift(name);
    localStorage.setItem('endGameScore', JSON.stringify(endGameScore));
    window.location.href = 'score.html';
  }
}

// Score Counter
function createScoreCounter() {
  var gameSpace = document.getElementById('gameSpace');
  var h2El = document.createElement('h2');
  h2El.setAttribute('id', 'current-score');
  h2El.style.display = 'none';
  h2El.textContent = endGameScore[0];
  gameSpace.appendChild(h2El);
}

function updateScoreCounter() {
  
  count++;
  score+=5;
  document.getElementById('score').innerHTML = "SCORE: "+ endGameScore[0] + "/100";
  updateScore(1,score,$("#timerTxt").html().replace("Time: ",""));
 // document.getElementById('current-score').innerHTML = endGameScore[0];

 console.log(count)

   if(count == 20)
   {
     clearInterval(timeInterval);
     let msg = document.getElementById("gameMode").innerHTML == "0" ? "Thanks for completing the game. Your score hase been taken." : "Thanks for completing the game."; 
     count = 0;
     $.confirm({
      title: 'Alert!',
      content: msg,
      useBootstrap:false,
      buttons: {
          back: function () {
              window.location.replace('./select-game.html')
          }
      }
  });
   }
}

function calcScore() {
  endGameScore[0] += 5;//shuffledList[roundCount].length;
}

// ++++++++++++ Exicutables ++++++++++++++++++++++++++++++++++++++++++++++++++
renderTimer();
startAnimatingCanvas();
initializeCanvasWithANewWord('');
shuffledList.shuffle(wordList);

