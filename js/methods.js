const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  numGuesses: 0
}

Object.keys(game).forEach(function(key) {
  console.log(key)
})

console.log(Object.keys(game))

Object.values(game).forEach((value) => console.log(value))


for (const [key, value] of Object.entries(game)) {
  console.log(`${key}: ${value}`)
}

console.log(Object.entries(game))

game.play = function() {
  this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
}