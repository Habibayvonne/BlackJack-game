
// create an array of cards 
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
let player = {
 name : "Evie",
chips : 78
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let random = Math.floor(Math.random()* 13) + 1
        if(random > 10){
            return 11
        } else if( random === 1){
            return 11
        } else {
            return random
        }
    }

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
   cardsEl.textContent = "cards: "
   for(let i = 0; i< cards.length; i++){
       cardsEl.textContent +=  cards[i] + " "
   }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
 function newCard(){
     if(isAlive == true && hasBlackJack === false){
    let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
     }

 }
