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
    showElementById('play-ground');
    continueGame()
}

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === currentAlphabet) {
        // update score

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore +1

        currentScoreElement.innerText = newScore;
        continueGame();
        removeBackgroundColorById(expectedAlphabet)
    } else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife -1;
        currentLifeElement.innerText = newLife;
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