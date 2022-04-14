

const newDeckBtn = document.getElementById('new-deck-btn')
const drawBtn = document.getElementById('draw-btn')
const cards = document.getElementById('cards')

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
            console.log(data)
            cards.innerHTML = `
                <img src="${data.cards[0].image}">
                <img src="${data.cards[1].image}">
            `
        })
}

drawBtn.addEventListener('click', drawCards)
newDeckBtn.addEventListener('click', handleClick)