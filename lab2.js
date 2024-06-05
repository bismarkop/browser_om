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
    let guesses = 0
    let playing = true
    let randomNum = Math.ceil(Math.random() * 100) + 1
    console.log(randomNum)
    // debugger
    p.textContent = `You get 10 guesses!`
    while (playing) {
        let guess = prompt("Guess a number from 1-100.")
        if (guess === null) {
            alert('Game over. Press "Start Game" to play again.')
            p.textContent = `You had ${remainingGuesses} guesses left! Press "Start Game to play again."`
            break
        }
        else if (typeof(guess) !== 'number') {
            alert("You must enter a number.")
        }
        else if (Number(guess) === randomNum) {
            alert(`You got it! The answer was ${randomNum}.`)
            p.textContent = `You got the answer in ${guesses} guesses! Press "Start Game" to play again.`
            playing = false
            break
        }
        else if (guess !== randomNum) {
            p.textContent = `You have ${remainingGuesses} guesses remaining.`
            remainingGuesses -= 1
            guesses += 1
            if (guess < randomNum) {
                alert(`Incorrect! The number is higher than ${guess}. You have ${remainingGuesses} left.`)
            }
            else if (guess > randomNum) {
                alert(`Incorrect! The number is lower than ${guess}. You have ${remainingGuesses} left.`)
            }
            else if (remainingGuesses === 0) {
                alert('Game over. Press "Start Game" to play again.')
                p.textContent = `You have no guesses remaining.`
                break
            }
            continue
        }
    }
}

