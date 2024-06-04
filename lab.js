// Create your game here!
const app = document.getElementById("app");
const divEl = document.createElement("div");
const header1El = document.createElement("h1");
const p = document.createElement("p");
const startButton = document.createElement("button");
let remainingGuesses = 10;

// Header
header1El.textContent = "Guess the number!";
p.textContent = `You have ${remainingGuesses} guesses remaining.`

// Styles
header1El.style.textAlign = "center";
header1El.style.backgroundColor = "blue";
header1El.style.padding = '10px';
p.style.fontSize = '20px';
divEl.style.alignContent = 'center';
divEl.style.textAlign = 'center';


// Appendings
divEl.appendChild(header1El);
header1El.appendChild(p);
app.append(divEl);
divEl.appendChild(startButton)


// Button
startButton.addEventListener("click", startGame)
startButton.textContent = "Start Game";
startButton.style.textAlign = 'center'



function startGame() {
    let remainingGuesses = 10
    let playing = true
    let randomNum = Math.ceil(Math.random() * 100) + 1
    console.log(randomNum)

    while (playing) {
        console.log(playing)
        // let guess = prompt("Guess a number from 1-100.")
        if (Number(guess) === randomNum) {
            alert(`You got it! The answer was ${randomNum}.`)
            playing = false
        }
        else if (guess !== randomNum) {
            remainingGuesses -= 1
            // p.textContent = `You have ${remainingGuesses} guesses remaining.`
            // p.replaceWith(`<p>You have ${remainingGuesses} guesses remaining.</p>`)
            console.log(p)
            setTimeout(() => {
                alert(`Incorrect! You have ${remainingGuesses} left.`)
            }, "2500")
            // alert(`Incorrect! You have ${remainingGuesses} left.`)
            if (remainingGuesses === 0) {
                alert("Game over. Press 'Start Game' to play again.")
                break
            }
            // alert(`Incorrect! You have ${remainingGuesses} left.`)
            continue
        }

    }
    function checkGuess (guess) {
        if (guess === randomNum) {
            alert("Correct!")
        }
        else {
            alert("Wrong")
            remainingGuesses -= 1
            if (remainingGuesses > 0) {
            }
        }
    }

    function guessNumber () {
        p.textContent = `You have ${remainingGuesses} guesses remaining.`
        setTimeout(() => {
            let userGuess = prompt("Guess a number from 1-100")
            if (userGuess) {
                checkGuess(userGuess)
            }
            alert(`Incorrect! You have ${remainingGuesses} left.`)
        }, 100)
    }
    

}

