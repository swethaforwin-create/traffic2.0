document.addEventListener("click", function (event) {

    let button = event.target.closest("button");

    if (!button) return;

    let audio = new (window.AudioContext ||
                     window.webkitAudioContext)();

    let oscillator = audio.createOscillator();
    let gain = audio.createGain();

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
        900,
        audio.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        500,
        audio.currentTime + 0.12
    );

    gain.gain.setValueAtTime(
        0.4,
        audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 0.12
    );

    oscillator.start();

    oscillator.stop(
        audio.currentTime + 0.12
    );

});
