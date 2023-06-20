let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let sound = document.getElementById("mySound");

let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
};

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = 0
    sound.play();
};

