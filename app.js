

const newDeckBtn = document.getElementById('new-deck-btn')
const drawBtn = document.getElementById('draw-btn')
const cards = document.getElementById('cards')
const oppCard = document.getElementById('opponent-card')
const playerCard = document.getElementById('opponent-card')

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
            document.getElementById("cards").children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            document.getElementById("cards").children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
        })
}

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1Value = valueOptions.indexOf(card1.value)
    const card2Value = valueOptions.indexOf(card2.value)

    if (card1Value > card2Value) {
        console.log(`Opponent wins this round`)
    } else if (card1Value < card2Value) {
        console.log(`You take this round`)
    } else {
        console.log(`Tie!`)
    }
}

const card1Obj = {
    value: "7"
}
const card2Obj = {
    value: "7"
}

determineCardWinner(card1Obj, card2Obj)

drawBtn.addEventListener('click', drawCards)
newDeckBtn.addEventListener('click', handleClick)