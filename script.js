let speech = new SpeechSynthesisUtterance();

// selectbox start

let voices = [];

let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)));
};

voiceselect.addEventListener("change", () => {
    speech.voice = voices[voiceselect.value];
})
// selectbox end

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})