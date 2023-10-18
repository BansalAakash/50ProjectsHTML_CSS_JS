const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const audios = ["audios/applause.wav"];
const container = document.querySelector(".container");
const body = document.body;
sounds.forEach((sound) => {
  const audio = document.createElement("audio");
  audio.src = `audios/${sound}.mp3`;
  audio.id = sound;
  document.body.insertAdjacentElement("afterbegin", audio);

  const button = document.createElement("button");
  button.innerText = sound;

  button.addEventListener("click", () => {
    stopAllSounds();
    document.getElementById(sound).play();
  });
  container.insertAdjacentElement("afterbegin", button);
});

const stopAllSounds = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};
