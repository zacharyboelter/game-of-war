

newDeckBtn = document.getElementById('new-deck-btn')
drawBtn = document.getElementById("draw-btn")

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
        })
}

drawBtn.addEventListener('click', drawCards)
newDeckBtn.addEventListener('click', handleClick)