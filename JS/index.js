// Compte à rebours //
const text = document.querySelector('h1');

function getChrono(){
    const now = new Date().getTime();

    // Définir la date pour laquelle le chrono affichera 00:00.
    const countdownDate = new Date('1 january, 2024').getTime();
    
    const distanceBase = countdownDate - now;
    
    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distanceBase % (1000 * 60 *60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000) ;

text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s `
}

getChrono();
const countDownInterval = setInterval(() => {
    getChrono();
}, 1000);