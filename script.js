const textElement = document.getElementById('typing-text');
// The roles you want to cycle through
const phrases = [
    "Software Engineer.",
    "Nature Tech Enthusiast.",
    "Tabla Player."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Remove characters
        textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;
        typeSpeed = 100;
    } else {
        // Add characters
        textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;
        typeSpeed = 200;
    }

    // Logic for switching between typing and deleting
    if (!isDeleting && characterIndex === currentPhrase.length) {
        // Pause at the end of the phrase
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start the animation once the page loads
document.addEventListener('DOMContentLoaded', type);