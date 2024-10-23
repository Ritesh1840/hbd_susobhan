// Confetti effect
function createConfetti() {
    let confettiCount = 200;  // Adjust confetti count for better performance if necessary
    const confettiColors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];

    const confetti = document.getElementById('confetti');

    for (let i = 0; i < confettiCount; i++) {
        const confetto = document.createElement('div');
        confetto.classList.add('confetto');
        confetto.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetto.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
        confetto.style.top = `${Math.random() * -20}vh`;   // Start slightly off-screen
        confetto.style.animationDuration = `${Math.random() * 3 + 4}s`; // Random fall speed
        confetto.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation
        confetti.appendChild(confetto);
    }
}

function showSurprise() {
    createConfetti();
    document.getElementById('greeting').textContent = "Enjoy Your Day, brooooo! 😉";
    document.querySelector('.rotating-text').textContent = "Have an amazing year!";
    playMusic();
}

// Background music toggle
function toggleMusic() {
    const music = document.getElementById('birthday-song');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Play music automatically
function playMusic() {
    const music = document.getElementById('birthday-song');
    music.play();
}