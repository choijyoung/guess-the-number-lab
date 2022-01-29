const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }, 
  getGuess: function() {
   prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
  } 
}
console.log(game.getGuess())
// It returns a value that is a NUMBER between smallestnum and biggestnum.
// Use while loop
// parseInt returns NAN if string cannot be parsed into number
