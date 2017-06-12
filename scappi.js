// Jukebox object
var Jukebox = {
  play: function () {
          document.getElementById("audioTag").play();
        },
  pause: function () {
          document.getElementById("audioTag").pause();
        },
  stop: function () {
          document.getElementById("audioTag")["src"] = "";
        }
};

// Song array: 1st element [0] --> Nevada song object, 2nd element [1] --> Alone song object
var songArray = [{
    name: "Nevada (feat. Cozi Zuehlsdorff)",
    artist: "Vicetone",
    duration: "03:24",
    source: "audio/nevada.mp3",
    artwork: "images/nevada.png"
},
{
    name: "Alone",
    artist: "Alan Walker",
    duration: "02:37",
    source: "audio/alone.mp3",
    artwork: "images/alone.png"
}]

// Get buttons
var playButton = document.getElementById("playbtn");
var pauseButton = document.getElementById("pausebtn");
var stopButton = document.getElementById("stopbtn");
var nevadaButton = document.getElementById("nevadaButton");
var aloneButton = document.getElementById("aloneButton");

// Set play button functionality
playButton.onclick = function() {
    Jukebox.play();
}
// Set pause button functionality
pauseButton.onclick = function() {
    Jukebox.pause();
}
// Set stop button functionality
stopButton.onclick = function() {
    document.getElementById("artwork")["src"] = "images/nosong.png"
    Jukebox.stop();
}
// Set nevada button functionality
nevadaButton.onclick = function() {
    document.getElementById("audioTag")["src"] = songArray[0]["source"];
    document.getElementById("artwork")["src"] = songArray[0]["artwork"];
}
// Set alone button functionality
aloneButton.onclick = function() {
    document.getElementById("audioTag")["src"] = songArray[1]["source"];
    document.getElementById("artwork")["src"] = songArray[1]["artwork"];
}