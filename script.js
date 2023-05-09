'use strict';

let randomFour = getRandomFour().join('');

let answer;
let arr = [];
let bulls = 0;
let cows = 0;
let counter = 0;

let btn = document.querySelector('#btn');
let num = document.querySelector('#num');
let ans = document.querySelector('#area');
btn.addEventListener('click', () => {
    answer = num.value;
    counter++;
    for (let index = 0; index < 4; index++) {
        if (answer[index] === randomFour[index]) {
            bulls++;
        } else if (randomFour.includes(answer[index])) {
            cows++;
        }
    }
    ans.value += `Ваш ответ: ${answer} Быков: ${bulls},коров: ${cows} `;
    bulls = 0;
    cows = 0;
    if (answer === randomFour) {
        ans.value += `Позравляем Вы победили попыток: ${counter}`;
    }
});

/////////////////////
function getRandomFour() {
    let arr = [];
    let rnd = 0;
    while (arr.length !== 4) {
        do {
            rnd = randomInteger(0, 9);
        } while (arr.includes(rnd));
        arr.push(rnd);
    }
    return arr;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
