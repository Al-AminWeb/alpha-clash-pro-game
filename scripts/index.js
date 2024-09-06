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

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}