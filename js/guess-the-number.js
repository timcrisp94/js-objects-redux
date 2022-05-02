/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let secretNum, guessList, isWinner
// 

/*------------------------ Cached Element References ------------------------*/

const form = document.querySelector("form")
const guessInput = document.getElementById("#guess-input")
const guessesEl = document.getElementById("#prev-guesses")
const messagesEl = document.getElementById("#message")
const resetBtn = document.querySelector("#reset-button")
const prevGuessMsg = document.querySelector("#prev-guesses-msg")


/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener("reset", init)


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
}
