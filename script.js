const cardOne = document.querySelector(".one")
const cards = document.querySelector(".card")

cardsChosen = []
idOfChosenCards =[]
matchingCards = []

const cardsArray = [
    {
    name: "fries",
    img: "images/fries.png"
},
{
    name: "fries",
    img: "images/fries.png"
},
{
    name: "burger",
    img: "images/burger.png"
},
{
    name: "burger",
    img: "images/burger.png"
},
{
    name: "pizza",
    img: "images/pizza.png"
},
{
    name: "pizza",
    img: "images/pizza.png"
},
{
    name: "pasta",
    img: "images/pasta.png"
},
{
    name: "pasta",
    img: "images/pasta.png"
}
]




function createGame() {
    for (let i = 0; i < cardsArray.length; i++){
        const cardImg = document.createElement("img")
        cardImg.setAttribute("src", "images/question.png")
        cardImg.setAttribute("data-id", i)
        cardImg.addEventListener("click", cardFlip)
        cards.appendChild(cardImg)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll ("img")
    const firstOption = idOfChosenCards[0]
    const secondOption = idOfChosenCards[1]
    if (cardsChosen[0] === cardsChosen[1] && cardsChosen[2] === cardsChosen[3]
        && cardsChosen[4] === cardsChosen[5] && cardsChosen[6] === cardsChosen[7] && 
        timer !== endtime) 
        alert("Hell yeah!")
        cards[firstOption].setAttribute("src", "images/thumbsUp.png")
        cards[secondOption].setAttribute("src", "images/thumbsUp.png")
        matchingCards.push(cardsChosen)
    // }else{
    //     cards[firstOption].setAttribute("src", "images/question.png")
    //     cards[secondOption].setAttribute("src", "images/question.png")
    //     alert("woops!")
    }
  







function cardFlip(){
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardsArray[cardId].name)
    idOfChosenCards.push(cardId)
    this.setAttribute("src", cardsArray[cardId].img)
    if (cardsChosen === 2){
        setTimeout(checkForMatch, 100)
    }
}





createGame()





// class MemoryGame {
//     constructor(cards, message){
//         this.cards = cards
//         this.message = message
//     }

//     static winningCombos = [
//         [1,8],
//         [2,5],
//         [3,7],
//         [4,6]

//     ]

//     winLose(){
//         if (timer.innerHTML = endtime){

//         }
        
//     }
//     }




const startingTime = 2
let time = startingTime * 60 
let minutes = Math.floor(time / 60) 
let seconds = Math.floor(startingTime % 60 )
const timer = document.querySelector("#timer")






const updateCountdown = setInterval(() =>{
    
    const startingTime = 2
    let minutes = Math.floor(time / 60) 
    let seconds = Math.floor(time % 60 )
    let endtime = "00:00"
    time--;
    timer.innerHTML = minutes + " : " + seconds
    if (minutes == 0 && seconds == 0){
      clearInterval (updateCountdown)
        timer.innerHTML = endtime
      
       
   }else if (minutes <= 9 && seconds <= 9) {
     timer.innerHTML = "0"+ minutes + " : " +"0" +seconds
   // }else if (seconds <= 9 ){
   //   timer.innerHTML = minutes + " : " + "0"+seconds
   } 

    
}, 1000);
  