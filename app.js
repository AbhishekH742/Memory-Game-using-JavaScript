document.addEventListener('DOMContentLoaded', () => {



    const cardArr = [
        {
            name: 'chesseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'chesseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },






    ]

    cardArr.sort(() => 0.5 - Math.random());  //it will sort the array randomly each time the document is reloaded

    // console.log(cardArr);
    const containerEl = document.querySelector('.container');

    const resultEl = document.querySelector('.result');

    let cardsChosenName = [];
    let choosenCardId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArr.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            // console.log(card);
            containerEl.appendChild(card);
            card.addEventListener('click', flipCard);

        }
    }


    function checkForCardMatch() {
        let Cards = document.querySelectorAll('img');
        let firstCardId = choosenCardId[0];
        let secondCardId = choosenCardId[1];
        // console.log(Cards);

        if (firstCardId == secondCardId) {
            Cards[firstCardId].setAttribute('src', 'images/blank.png')
            Cards[secondCardId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosenName[0] === cardsChosenName[1]) {
            Cards[choosenCardId[0]].setAttribute('src', 'images/white.png');
            Cards[choosenCardId[1]].setAttribute('src', 'images/white.png');
            Cards[firstCardId].removeEventListener('click', flipCard);
            Cards[secondCardId].removeEventListener('click', flipCard);
            alert("You found a match!");
            cardsWon.push(choosenCardId);

        }
        else {
            Cards[choosenCardId[0]].setAttribute('src', 'images/blank.png');
            Cards[choosenCardId[1]].setAttribute('src', 'images/blank.png');
            alert("sorry try again");
        }
        choosenCardId = [];
        cardsChosenName = [];
        resultEl.textContent = cardsWon.length;
        if (cardsWon.length === cardArr.length / 2) {
            resultEl.textContent = "Congratulation! you found them all";
        }

    }


    function flipCard() {
        let cardId = this.getAttribute('data-id');
        // console.log(cardId);
        cardsChosenName.push(cardArr[cardId].name);
        // console.log(cardsChosenName);
        choosenCardId.push(cardId);
        this.setAttribute('src', cardArr[cardId].img);
        if (choosenCardId.length === 2) {
            setTimeout(checkForCardMatch, 100);
        }
    }

    createBoard();

});