'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('#num-box').value);

    if (!guess) {
        document.querySelector('.sub-heading').innerHTML = `<i class="ri-error-warning-fill"></i> No input Number 😔`
    } else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
            document.querySelector('.hscore').innerHTML = highScore;
        }
        document.querySelector('.sub-heading').innerHTML = `<i class="ri-checkbox-circle-fill"></i> ${guess} - Correct Number 🎉`;
        document.querySelector('body').style.backgroundColor = `#bef264`;
        document.querySelector('.number').innerHTML = secretNumber;

    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.sub-heading').innerHTML = `${guess} - Too High 📈`
            score--;
            document.querySelector('.score').innerHTML = score;
        } else {
            document.querySelector('.sub-heading').innerHTML = `You lost the game! 😑`
            document.querySelector('.score').innerHTML = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.sub-heading').innerHTML = `${guess} - Too low 📉`
            score--;
            document.querySelector('.score').innerHTML = score;
        } else {
            document.querySelector('.sub-heading').innerHTML = `You lost the game! 😑`
            document.querySelector('.score').innerHTML = 0;
        }
    }

});

// window refresh = location.reload();
document.querySelector('.try').addEventListener('click', () => {
    /* score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.number').innerHTML = `?`;
    document.querySelector('#num-box').value = ''; */
    location.reload()
})
