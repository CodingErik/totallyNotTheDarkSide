// let audioElement = document.createElement("audio");
// let sound = "https://freesound.org/data/previews/499/499699_10350281-hq.mp3";

// audioElement.setAttribute("src", sound);
// // Theme Button
// $("#play").on("click", function () {
//   audioElement.play();
//   console.log(this);
// });
// $("#pause").on("click", function () {
//   audioElement.pause();
//   console.log(this);
// });

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const audioElement = document.querySelector("audio");
const track = audioContext.createMediaElementSource(audioElement);

//connect node to destination
track.connect(audioContext.destination);

//select play button
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  function () {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
    } else if (this.DataTransferItem.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }
  },
  false
);

audioElement.addEventListener("ended", () => {
  playButton.dataset.playing = "false";
});
