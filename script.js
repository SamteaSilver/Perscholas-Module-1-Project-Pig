const p1WinEl = document.querySelector('.p1-win');
p1WinEl.style.display = 'none'
const p2WinEl = document.querySelector('.p2-win');
p2WinEl.style.display = 'none'

// Rolling a die 
const p1RollEl = document.querySelector('.p1-roll');

let p1Total = 0;
let p1Score = 0;
let p2Total = 0;
let p2Score = 0;
const goal = 100;

// Track player 1 score to increment and clear for each round
const p1ScoreEl = document.querySelector('.p1-score')
// Track player 1 total to increment at the end of the turn
const p1TotalEl = document.querySelector('.p1-total')

// Track player 2 score to increment and clear for each round
const p2ScoreEl = document.querySelector('.p2-score')
// Track player 2 total to increment at the end of the turn
const p2TotalEl = document.querySelector('.p2-total')



// Player 1 roll event 
p1RollEl.addEventListener('click', function (evt) {


    // Random number between 1-6 inclusive
    let randomDice1 = Math.floor(Math.random() * 6 + 1);

    // Select the die element
    let p1DiceEl = document.querySelector('.dice');


    // Display the die image based on the random number
    p1DiceEl.src = `die-side-${randomDice1}.jpg`;


    // If the die roll is not 1 increment placeholder score by the dice roll and incremenet until you roll a 1 or stop 
    if (randomDice1 !== 1) {
        p1Score += randomDice1
        p1ScoreEl.textContent = `Current score: ${p1Score}`

    } else {
        p1Score = 0;
        p1ScoreEl.textContent = `Current score: ${p1Score}`
        p1RollEl.disabled = true;
        p1EndEl.disabled = true;
        p2RollEl.disabled = false;
        p2EndEl.disabled = false;

    }
})


// Adds score to the total and ends turn
const p1EndEl = document.querySelector('.p1-end');

p1EndEl.addEventListener('click', function (evt) {
    p1Total += p1Score;
    p1TotalEl.textContent = `Total: ${p1Total}`
    p1Score = 0;
    p1ScoreEl.textContent = `Current score: ${p1Score}`
    p1RollEl.disabled = true;
    p1EndEl.disabled = true;
    p2RollEl.disabled = false;
    p2EndEl.disabled = false;

    if (p1Total >= goal) {
        p1WinEl.style.display = 'inline'
        p1RollEl.disabled = true;
        p1EndEl.disabled = true;
        p2RollEl.disabled = true;
        p2EndEl.disabled = true;
    }

})



// Player 2 dice roll
let p2RollEl = document.querySelector('.p2-roll');

p2RollEl.addEventListener('click', function () {

    // Random number between 1-6 inclusive
    let randomDice2 = Math.floor(Math.random() * 6 + 1);

    // Select the die element
    let p2DiceEl = document.querySelector('.dice-2');

    // Display the die image based on the random number
    p2DiceEl.src = `die-side-${randomDice2}.jpg`;

    if (randomDice2 !== 1) {
        p2Score += randomDice2
        p2ScoreEl.textContent = `Current score: ${p2Score}`

    } else {
        p2Score = 0;
        p2ScoreEl.textContent = `Current score: ${p2Score}`
        p2RollEl.disabled = true;
        p2EndEl.disabled = true;
        p1RollEl.disabled = false;
        p1EndEl.disabled = false;

    }


})


// Adds score to the total and ends turn
const p2EndEl = document.querySelector('.p2-end');

p2EndEl.addEventListener('click', function (evt) {
    p2Total += p2Score;
    p2TotalEl.textContent = `Total: ${p2Total}`
    p2Score = 0;
    p2ScoreEl.textContent = `Current score: ${p2Score}`
    p2RollEl.disabled = true;
    p2EndEl.disabled = true;
    p1RollEl.disabled = false;
    p1EndEl.disabled = false;

    if (p2Total >= goal) {
        p2WinEl.style.display = 'block'
        p1RollEl.disabled = true;
        p1EndEl.disabled = true;
        p2RollEl.disabled = true;
        p2EndEl.disabled = true;
    }
})

// Start the game off with disabled buttons, player 1 goes first
p2RollEl.disabled = true;
p2EndEl.disabled = true;

// Reset button 
const resetEl = document.querySelector('.reset');

resetEl.addEventListener('click', function () {
    p1WinEl.style.display = 'none'
    p2WinEl.style.display = 'none'
    p1Total = 0;
    p1Score = 0;
    p2Total = 0;
    p2Score = 0;
    p1ScoreEl.textContent = `Current score: 0`
    p2ScoreEl.textContent = `Current score: 0`
    p1TotalEl.textContent = `Total: 0`
    p2TotalEl.textContent = `Total: 0`
    p1RollEl.disabled = false;
    p1EndEl.disabled = false;
    p2RollEl.disabled = true;
    p2EndEl.disabled = true;
})


