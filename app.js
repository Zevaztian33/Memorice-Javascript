document.addEventListener('DOMContentLoaded', () =>{
    const cardArray =[
        {
            name: 'mario',
            img: './img/mario.png'
        },
        {
            name: 'dk',
            img: './img/dk.png'
        },
        {
            name: 'kirby',
            img: './img/kirby.png'
        },
        {
            name: 'pikachu',
            img: './img/pikachu.png'
        },
        {
            name: 'samus',
            img: './img/samus.png'
        },
        {
            name: 'link',
            img: './img/link.png'
        },
        {
            name: 'mario',
            img: './img/mario.png'
        },
        {
            name: 'dk',
            img: './img/dk.png'
        },
        {
            name: 'kirby',
            img: './img/kirby.png'
        },
        {
            name: 'pikachu',
            img: './img/pikachu.png'
        },
        {
            name: 'samus',
            img: './img/samus.png'
        },
        {
            name: 'link',
            img: './img/link.png'
        }
    ]
    cardArray.sort(() => 0.5 -Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    resultDisplay.textContent = '0'
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', './img/backcard.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', './img/backcard.png')
            cards[optionTwoId].setAttribute('src', './img/backcard.png')
        } else if (cardsChosen[0] === cardsChosen[1]){
            cards[optionOneId].setAttribute('src', './img/success.png')
            cards[optionTwoId].setAttribute('src', './img/success.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './img/backcard.png')
            cards[optionTwoId].setAttribute('src', './img/backcard.png')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Felicitaciones! Has completado el juego',
                showConfirmButton: true,
            })
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
        }
      }
    
      createBoard()
})