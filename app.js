

newDeckBtn = document.getElementById('new-deck-btn')

let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(function(data) {
            deckId = data.deck_id
            console.log(deckId)
            console.log(data)
        })
}

newDeckBtn.addEventListener('click', handleClick)