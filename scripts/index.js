// function play() {
//     //hide the home screen
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden");
//     //show the playground
//
//     const playGroupSection = document.getElementById("play-ground");
//     playGroupSection.classList.remove("hidden");
// }

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    if(playerPressed === "Escape") {
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === currentAlphabet) {
        // update score

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText);
        // currentScoreElement.innerText = currentScore + 1;

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1
        setTextElementValueById('current-score', updatedScore);


        continueGame();
        removeBackgroundColorById(expectedAlphabet)
    } else {
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText
        // const currentLife = parseInt(currentLifeText);
        // currentLifeElement.innerText = currentLife -1;

        const currentLife = getTextElementValueById('current-life');
        const updatedLife  = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0){
            // hideElementById('play-ground');
            // showElementById('final-score')
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}