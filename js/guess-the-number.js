/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let secretNum, guessList, isWinner
// 

/*------------------------ Cached Element References ------------------------*/

const form = document.querySelector("form")
const guessInput = document.querySelector("#guess-input")
const guessesEl = document.querySelector("#prev-guesses")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset-button")
const prevGuessMsg = document.querySelector("#prev-guesses-msg")

/*----------------------------- Event Listeners -----------------------------*/
form.addEventListener("reset", init)

form.addEventListener("submit", function (evt) {
  evt.preventDefault()
  if (isWinner === false) {
    checkGuess(parseInt(guessInput.value))
  }
})


/*-------------------------------- Functions --------------------------------*/
// our init function should take all of our state and reset it to our initial values

init();

function init() {
  guessesEl.textContent = ""
  messageEl.textContent = "Please enter a guess between 1 and 100"
  resetBtn.setAttribute("hidden", true)
  prevGuessMsg.textContent = ""
  guessList = []
  isWinner = false
  secretNum = Math.floor(Math.random() * 100 + 1)
  console.log(secretNum)
  render()
}

function checkGuess(guess) {
  guessInput.value = ""
  if (isNaN(guess) || guess < 1 || guess > 100) {
    messageEl.textContent = "WHOOPS enter a NUMBER between 1 and 100"
  } else if (guess === secretNum) {
    isWinner = true
  }
  guessList.push(guess)
  console.log(guessList)
  render()
}

function render() {
  const lastGuess = guessList.at(-1)
  console.log(lastGuess)
  const div = document.createElement("div")
  div.textContent = lastGuess

  if (guessList.length === 1) {
    prevGuessMsg.textContent = "Previous Guesses:"
    resetBtn.removeAttribute("hidden")
  }

  if (isWinner) {
    renderWin(div)
  } else if (lastGuess > secretNum || lastGuess < secretNum) {
    renderGuess(div, lastGuess)
  }

}

function renderError(error) {
  messageEl.className = "error"
  messageEl.textContent = error
}

function renderWin(div) {
  messageEl.className = "winner"
  div.className = "winner"
  guessesEl.appendChild(div)
  if (guessList.length === 1) {
    messageEl.textContent = `You found the number in one guess!`
  } else {
    messageEl.textContent = `Congratulations! You found the number ${secretNum} in ${guessList.length} guesses!`
  }
}

function renderGuess(div, lastGuess) {
  if (lastGuess < secretNum) {
    messageEl.className = "low"
    div.className = "low"
    messageEl.textContent = `${lastGuess} is too low, try again!`
  } else if (lastGuess > secretNum) {
    messageEl.className = "high"
    div.className = "high"
    messageEl.textContent = `${lastGuess} is too high, try again!`
  }
  guessesEl.appendChild(div)
}