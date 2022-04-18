

const newDeckBtn = document.getElementById('new-deck-btn')
const drawBtn = document.getElementById('draw-btn')
const cards = document.getElementById('cards')
const oppCard = document.getElementById('opponent-card')
const playerCard = document.getElementById('player-card')
const whoWonText = document.getElementById('who-won')
const remainingCards = document.getElementById('num-of-cards-remaining')

let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
            console.log(deckId)
        })
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            cards.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cards.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            whoWonText.innerHTML = `${winnerText} ${data.cards[0].value} - ${data.cards[1].value}`
            remainingCards.innerHTML = `Number Of remaining cards: ${data.remaining}`
        })

        
}

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1Value = valueOptions.indexOf(card1.value)
    const card2Value = valueOptions.indexOf(card2.value)

    return card1Value > card2Value ? `Opponent wins this round`
    : card1Value < card2Value ? 'You win this one' 
    : `War!`

    // if (card1ValueIndex > card2ValueIndex) {
    //     return whoWonText.innerHTML = `
    //     <h2>Card 1 wins!</h2>
    //     `
    // } else if (card1ValueIndex < card2ValueIndex) {
    //    return whoWonText.textContent = `
    //    <h2>Card 2 wins!</h2>
    //    `
    // } else {
    //    return whoWonText.textContent = `
    //    <h2>War!!!!!</h2>
    //    `
    // }
  
}

const card1Obj = {
    value: "7"
}
const card2Obj = {
    value: "4"
}



drawBtn.addEventListener('click', drawCards)
newDeckBtn.addEventListener('click', handleClick)
determineCardWinner(card1Obj, card2Obj)