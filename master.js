window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const claps = document.querySelectorAll('.claps div');
    const details = document.querySelector('.details');
    const colors = ['#2CCAFF', '#FF6682', '#AB80FF', '#83E88F', '#FFF585', '#FF7C6B'];

    //Making the sound work
    claps.forEach((clap, index) => {
        clap.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });

    });

    //The bubble-making function
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        details.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            details.removeChild(this);
        });
    };
});