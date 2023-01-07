//grabbing each card and getting a nodeList returned w document.querySelectorAll

const cards = document.querySelectorAll(".card")
const message = document.querySelector(".msg")
const playButton = document.querySelector(".playButton") 

//define variable to a boolean to check if cards are flipped
//define variable to a boolean for the same card not to register as a match
//define card variables to represent the click of each


playButton.addEventListener("click", switchPage)


function switchPage (){
    const cards = document.querySelector(".hide")
    if (cards.style.display !== "none"){
        cards.style.display = "none"
    }else{
        cards.style.display = "block"
    }
    // console.log("worked")
}












const cardsArray = Array.prototype.slice.call(cards)

for (let i = 0; i < cardsArray.length; i++){
    cardsArray[i].addEventListener("click", flipCard)
}

chosenCards = []

let flippedCard = false
let lockBoard = false
let firstCard
let secondCard
let endtime = "00:00"



// const updateCountdown = setInterval(() =>{
    
//     const startingTime = 2
//     let minutes = Math.floor(time / 60) 
//     let seconds = Math.floor(time % 60 )
//     let endtime = "00:00"
//     time--;
//     timer.innerHTML = minutes + " : " + seconds
//     if (minutes == 0 && seconds == 0){
//       clearInterval (updateCountdown)
//         timer.innerHTML = endtime
      
       
//    }else if (minutes <= 9 && seconds <= 9) {
//      timer.innerHTML = "0"+ minutes + " : " +"0" +seconds
//    // }else if (seconds <= 9 ){
//    //   timer.innerHTML = minutes + " : " + "0"+seconds
//    } 

    
// }, 1000)





//create a function to flip cards

function flipCard () {
//this represents the element that was clicked 
this.classList.toggle("flip")

if (!flippedCard){

    flippedCard = true
    firstCard = this

} else {

    flippedCard = false
    secondCard = this
checkForMatch()

// console.log(firstCard)
// console.log(secondCard)
// console.log(flippedCard)
// console.log(firstCard.dataset.id)
// console.log(secondCard.dataset.id)




}




}

function checkForMatch () {
    if (firstCard.dataset.id === secondCard.dataset.id){
    cardsMatch()
}else{
    
    cardsDontMatch()
}
}


function cardsMatch () {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
}

function checkCardsMatch () { 
     setTimeout(() => {
    
    if (cardsArray[0] === cardsArray[1] &&
        cardsArray[2] === cardsArray[3] &&
        cardsArray[4] === cardsArray[5] &&
        cardsArray[6] === cardsArray[7] ){
            cardsMatch()
          alert('got em all')
        
        }
 }, 100)
}
 




     



function cardsDontMatch () {
    setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    }, 500)
}






















































const startingTime = 2
let time = startingTime * 60 
let minutes = Math.floor(time / 60) 
let seconds = Math.floor(startingTime % 60 )
const timer = document.querySelector("#timer")







