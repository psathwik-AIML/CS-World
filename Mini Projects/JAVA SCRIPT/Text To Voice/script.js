let text = document.querySelector("#text");
let startButton = document.querySelector("#start");
let allVoices = document.querySelector(".all-voices");

let speech = speechSynthesis;
console.log(speech);
speech.addEventListener("voiceschanged", assignVoices);

function assignVoices() {
  let voices = speech.getVoices();
  for (let eachVoice of voices) {
    const { name, lang } = eachVoice;
    // cretion of option element
    let option = document.createElement("option");
    option.value = name;
    option.innerText = `${name} - ${lang}`;
    allVoices.appendChild(option);
  }
}

startButton.addEventListener("click", checkRules);

function checkRules() {
  console.log(speech);

  if (!speech.speaking) {
    textSpeak(text.value);
    console.log("yes");
  } else {
    console.log("no");
  }
}

function textSpeak(text) {
  let utterence = new SpeechSynthesisUtterance(text);
  for (let eachVoice of speech.getVoices()) {
    if (eachVoice.name === allVoices.value) {
      utterence.voice = eachVoice;
    }
  }
  speech.speak(utterence);
}
