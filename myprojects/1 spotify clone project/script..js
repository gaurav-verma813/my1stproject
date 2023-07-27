console.log("WELCOME TO SPOTIFY");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myprogressbar");
let Gif = document.getElementById("gif");
let masterSongName = document.getElementById("mastersongname");
let songItems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songName: "🎵 AARAM AATA HAI DEEDAR",
    filepath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "🎵 BETHI RAH MITRAN",
    filepath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "🎵 ALRIGHT",
    filepath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "🎵 BAI BAI",
    filepath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "🎵 BANDOOK",
    filepath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },

  {
    songName: "🎵 BEDRDI SE PYAR KA",
    filepath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "🎵 BESHARAM RANG",
    filepath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    Gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    Gif.style.opacity = 0;
  }
});

// listen to events
audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songitemPlay")).forEach(
    (Element) => {
      Element.classList.remove("fa-pause-circle");
      Element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songitemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

function addMusicNoteEmoji(songName) {
  // return "🎵 " + songName;
  Element.getElementsByClassName("songName")[0].innerText =
    "🎵 " + songs[i].songName;
}
