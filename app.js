const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      do {
        this.prevGuesses.push(this.getGuess())
        this.render();
        this.helper();
      } 
      while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) 
      
      return
  }, 
  getGuess: function() {
    let guess
    do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }
      while (isNaN(guess) || guess > this.biggestNum ||  guess < this.smallestNum)
      return guess
  }, 

  render: function() {
    if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join(', ')}`)
    } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
      alert(`You guess is too low. Previous guess: ${this.prevGuesses.join(', ')}`)
    } else {
      alert(`Congrats! You have guessed the number in ${this.prevGuesses.length} tries!`)
    }
  },
  helper: function() {
    if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
    game['biggestNum'] = this.prevGuesses[this.prevGuesses.length - 1]
  }
   if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
      game['smallestNum'] = this.prevGuesses[this.prevGuesses.length - 1]
   }
  },
  setvalue: function() {
    
  }
  
}
game.play()