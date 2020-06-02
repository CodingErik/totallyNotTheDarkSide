// try {
//   // establishes audio for windows or iOs
//   window.audioCtx = window.AudioContext || window.webkitAudioContext;
//   //audioContext is a built in  interface
//   let audioCtx = new AudioContext();
// } catch (e) {
//   alert("Web Audio API is not supported in this browser");
// }

window.audioCtx = window.AudioContext || window.webkitAudioContext;
//audioContext is a built in  interface
let audioCtx = new AudioContext();

function loadSound() {
  // get the audio element
  const audioElement = document.querySelector("audio").getAttribute("src");
  // pass it into the audio context
  const track = audioContext.createMediaElementSource(audioElement);
}

// select our play button
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  function () {
    loadSound();
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    // play or pause track depending on state
    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
    } else if (this.dataset.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }
  },
  false
);

//this waits for the playing to end
// audioElement.addEventListener(
//   "ended",
//   () => {
//     playButton.dataset.playing = "false";
//   },
//   false
// );

//this code is for "volume control"
const gainNode = audioContext.createGain();
track.connect(gainNode).connect(audioContext.destination);
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener(
  "input",
  function () {
    gainNode.gain.value = this.value;
  },
  false
);

// this taken from somewhere else
// (function () {
//     'use strict';

//     const URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3';

//     const context = new AudioContext();
//     const playButton = document.querySelector('#play');

//     let yodelBuffer;

//     window.fetch(URL)
//         .then(response => response.arrayBuffer())
//         .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
//         .then(audioBuffer => {
//             playButton.disabled = false;
//             yodelBuffer = audioBuffer;
//         });

//     playButton.onclick = () => play(yodelBuffer);

//     function play(audioBuffer) {
//         const source = context.createBufferSource();
//         source.buffer = audioBuffer;
//         source.connect(context.destination);
//         source.start();
//     }
// } ());
