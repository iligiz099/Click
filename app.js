let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');


button.onclick = start;

function start() {

     const startTime = Date.now();

     display.textContent = formaTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
         const delta = Date.now() - startTime;
         display.textContent = formaTime(TIMEOUT -delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Game Over';

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formaTime(ms){
    return Number.parseFloat(ms / 1000).toFixed(2);
}