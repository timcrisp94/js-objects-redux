/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let secretNum, guessList, isWinner
// 

/*------------------------ Cached Element References ------------------------*/

const form = document.querySelector("form")
const guessInput = document.querySelector("#guess-input")
const guessesEl = document.querySelector("#prev-guesses")
const messagesEl = document.querySelector("#message")
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
  messagesEl.textContent = "Please enter a guess between 1 and 100"
  resetBtn.setAttribute("hidden", true)
  prevGuessMsg.textContent = ""
  guessList = []
  isWinner = false
  secretNum = Math.floor(Math.random() * 100 + 1)
  console.log(secretNum)
}

function checkGuess(guess) {
  guessInput.value = ""
  if (isNaN(guess) || guess < 1 || guess > 100) {
    messagesEl.textContent = "WHOOPS enter a NUMBER between 1 and 100"
  } else if (guess === secretNum) {
    isWinner = true
  }
  guessList.push(guess)
  console.log(guessList)
  render()
}