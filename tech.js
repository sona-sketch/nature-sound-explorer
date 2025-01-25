// Get audio elements
const rainSound = document.getElementById('rain-sound');
const oceanSound = document.getElementById('ocean-sound');
const forestSound = document.getElementById('forest-sound');
const fireplaceSound = document.getElementById('fireplace-sound');

// Get buttons
const rainButton = document.getElementById('rain');
const oceanButton = document.getElementById('ocean');
const forestButton = document.getElementById('forest');
const fireplaceButton = document.getElementById('fireplace');
const stopButton = document.getElementById('stop');

// Get volume control
const volumeControl = document.getElementById('volume');

// Play sound function
function playSound(sound) {
    sound.play();
}

// Stop sound function
function stopSound(sound) {
    sound.pause();
    sound.currentTime = 0;
}

// Event listeners for the buttons
rainButton.addEventListener('click', () => {
    stopAllSounds();
    playSound(rainSound);
});

oceanButton.addEventListener('click', () => {
    stopAllSounds();
    playSound(oceanSound);
});

forestButton.addEventListener('click', () => {
    stopAllSounds();
    playSound(forestSound);
});

fireplaceButton.addEventListener('click', () => {
    stopAllSounds();
    playSound(fireplaceSound);
});

// Stop all sounds when the 'Stop All' button is clicked
stopButton.addEventListener('click', stopAllSounds);

// Stop all sound functions
function stopAllSounds() {
    stopSound(rainSound);
    stopSound(oceanSound);
    stopSound(forestSound);
    stopSound(fireplaceSound);
}

// Set volume based on the slider
volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    rainSound.volume = volume;
    oceanSound.volume = volume;
    forestSound.volume = volume;
    fireplaceSound.volume = volume;
});