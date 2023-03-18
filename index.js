const cards = [...document.querySelectorAll(".card")];
const frontCard = document.querySelector(".front")
const message = document.querySelector(".msg");
const winLossMsg = document.querySelector(".winLoss");
const playButton = document.querySelector(".playButton");
const gameBoard = document.querySelector(".gameboard");
const starterPg = document.querySelector("#starter");
const startingTime = 0;
const scoreBoard = document.querySelector(".score")
const container = document.querySelector(".container")
console.log(container.children)
let score = 0
const modal = document.querySelector("#modal")
//create a function to switch the pages
function switchPage() {
  starterPg.classList.add("hide")
  gameBoard.classList.remove("hide")
}

//add an event listener to each individual element with a class of card
cards.forEach((card) => card.addEventListener("click", flipCard));

//add click event listener to play button and onclick, invoke the switchPage function
playButton.addEventListener("click", switchPage);

//when a match is made put it in here
chosenCards = [];
//when a pair is incorrect put it here
wrongCards = [];
//boolean variable to detect if cards are flipped
let flippedCard = false;
//variables to hold the first and second card clicked
let firstCard;
let secondCard;



//create a function to flip cards
function flipCard() {
  //this represents the element that was clicked
  this.classList.add("flip");

  //if the cards are flipped, the first card clicked fills
  //the undefined firstCard variable
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;

    //else, the second card clicked fills the undefined secondCard
    //variable, and flipped card returns to false for the next set,
    //and the checkForMatch function is invoked
  } else {
    flippedCard = false;
    secondCard = this;
    checkForMatch();
  }
}

//create a function to check if cards match

function checkForMatch() {
  //if the data inside the first card clicked matches the data inside
  //the second card clicked
  if (firstCard.dataset.id === secondCard.dataset.id) {
    //invoke the cardsMatch function
    cardsMatch();
    score++
    scoreBoard.innerHTML = `Score: ${score}` 
    // push the cards clicked to our empty chosenCards[]
    //invoke checkCardsMatch function
    chosenCards.push(firstCard.dataset.id, secondCard.dataset.id);
    winOrLose();

    //else invoke the cardsDontMatch function and
  } else {
    cardsDontMatch();
    if(score === 0 ){
      score
    }else{
      score--
      scoreBoard.innerHTML = `Score: ${score}` 
    }
    //update the the empty msg element with text
    message.innerHTML = "not quite!";

    //push the cards clicked to our empty wrongCards[]
    wrongCards.push(firstCard.dataset.id, secondCard.dataset.id);

    //invoke checkCardsMatch function
    winOrLose();
  }

  //create a function for cards that match
  function cardsMatch() {
    //remover the event listener and flipCard function of the matching cards
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  //create a function for cards that dont match
  function cardsDontMatch() {
    //use setTimeout() to slow down the process of this block
    setTimeout(() => {
      //remove the first and second cards clicked, flip class
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      //update the message element to empty
      message.innerHTML = "";
    }, 500);
  }

  //create a function for win/lose logic
  function winOrLose() {
    //use setTimeout to slowdown the process of this block
    setTimeout(() => {
      //if our empty chosenCards array's length is equal to 8
      if (chosenCards.length === 16) {
        //update the empty message element with text
        document.querySelector(".winLoss").innerHTML = "you win!";
        //using clearInterval to stop timer
        cards.forEach((card) => card.removeEventListener("click", flipCard));

        modal.classList.remove("hide")
        //else if our empty wrongCards array's length is strictly equal to 4
      } else if (wrongCards.length === 8) {
        modal.classList.remove("hide")

        //clear the inner HTML of out message element
        document.querySelector(".msg").innerHTML = "";
        //update the empty winLoss with text
        document.querySelector(".winLoss").innerHTML = "you lose";
        //using clearInterval to stop timer
        cards.forEach((card) => card.removeEventListener("click", flipCard));
      }
    }, 100);
  }
}

(function shuffle() {
  cards.forEach(card => {
    let random = Math.floor(Math.random() * 4)
    card.style.order = random
  })

}
)()

// function shuffle(arr){
//   for(let i = arr.length - 1; i > 0; i-- ){
//     const j = Math.floor(Math.random() * (i + 1))

//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
//   return arr
// }

// (function shuffleCards(){
//   shuffle(cards)
// })()