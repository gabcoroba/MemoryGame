// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 400; //how long to wait before starting playback of the clue sequence
// Global variables
var pattern =[];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strike = 0;

function startGame() {
  //initialize game variables
  pattern = Array.from({length: 5}, () => Math.floor(Math.random() * 6)+1);
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  strike = 0;
}

function stopGame() {
  gamePlaying = false;
  progress = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

const freqMap = {
  1: 280.6,
  2: 320.6,
  3: 380,
  4: 466.2,
  5: 500,
  6: 123
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime= clueHoldTime -30;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame(); //Game won
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }
  else{
    //player lost
    strike++;
    alert("Wrong! Strike " + strike);
    if(strike==3){
    loseGame();}
  }

  // add game logic here
}
