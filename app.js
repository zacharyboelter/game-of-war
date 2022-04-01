


newDeckBtn = document.getElementById('new-deck-btn')

newDeckBtn.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => console.log(data))
})