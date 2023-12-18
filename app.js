document.addEventListener("DOMContentLoaded", () => {
  const cardArr = [
    {
      name: "chesseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "chesseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArr.sort(() => 0.5 - Math.random());
  //    console.log(cardArr);

  let choosenCardName = [];
  let choosenCardId = [];
  let wonCards = 0;

  const conatinerEl = document.querySelector(".container");
  const resultEl = document.querySelector('.result');

  function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      //   console.log(card);
      conatinerEl.appendChild(card);
      card.addEventListener("click", flipCard);
    }
  }

  function checkCardMatch() {
    let firstChoosenCard = choosenCardId[0];
    let secondChoosenCard = choosenCardId[1];

    let Cards = document.querySelectorAll(".container img");
    // console.log(Cards);

    if (firstChoosenCard === secondChoosenCard) {
      alert("You have clicked the same image!");
      Cards[firstChoosenCard].setAttribute("src", "images/blank.png");
      Cards[secondChoosenCard].setAttribute("src", "images/blank.png");
    }
    else if(choosenCardName[0] === choosenCardName[1]){
        alert("You got a matching card!");
        Cards[choosenCardId[0]].setAttribute('src', 'images/white.png');
        Cards[choosenCardId[1]].setAttribute('src', 'images/white.png');
        Cards[firstChoosenCard].removeEventListener('click', flipCard);
        Cards[secondChoosenCard].removeEventListener('click', flipCard);

        wonCards++;
    }
    else{
        Cards[choosenCardId[0]].setAttribute('src', 'images/blank.png');
        Cards[choosenCardId[1]].setAttribute('src', 'images/blank.png');
        alert("Sorry try again");
    }

    choosenCardId = [];
    choosenCardName = [];

    resultEl.textContent = wonCards;
    if(wonCards === cardArr.length/2){
    resultEl.textContent = "Congratulation! you won";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    // console.log(cardId);

    choosenCardName.push(cardArr[cardId].name);
    // console.log(choosenCardName);

    choosenCardId.push(cardId);
    // console.log(choosenCardId);

    this.setAttribute("src", cardArr[cardId].img);

    if (choosenCardId.length === 2) {
      setTimeout(checkCardMatch, 100);
    }
  }

  createBoard();
});
