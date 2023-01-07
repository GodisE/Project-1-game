//grabbing each card and getting a nodeList returned w document.querySelectorAll

const cards = document.querySelectorAll(".card")
const message = document.querySelector(".msg")
const winLossMsg = document.querySelector(".winLoss")
const playButton = document.querySelector(".playButton") 
const resetButton = document.querySelector("#reset")
const timer = document.querySelector("#timer")
const startingTime = 2
//define variable to a boolean to check if cards are flipped
//define variable to a boolean for the same card not to register as a match
//define card variables to represent the click of each


playButton.addEventListener("click", switchPage)


function switchPage (){
    const cardsHidden = document.querySelector(".hide")
    const gameButton =  document.querySelector(".playButton")
    if  (cardsHidden.style.display = "block"){
       gameButton.style.display = "block"
    }
    }

       
    
    // console.log("worked")













const cardsArray = Array.from(cards)

console.log(cardsArray)

//when a match is made put it in here
chosenCards = []
wrongCards = []
let flippedCard = false
let lockBoard = false
let firstCard
let secondCard
let endtime = "00:00"
let time = startingTime * 60 
let minutes = Math.floor(time / 60) 
let seconds = Math.floor(startingTime % 60 )



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

    
}, 1000)





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

for (let i = 0; i < cardsArray.length; i++){
    cardsArray[i].addEventListener("click", flipCard)
}




function checkForMatch () {
    if (firstCard.dataset.id === secondCard.dataset.id){
    cardsMatch()
    
    chosenCards.push(firstCard.dataset.id, secondCard.dataset.id)
    checkCardsMatch() 
    

}else{
    cardsDontMatch()
    message.innerHTML = ("not quite!")
    wrongCards.push(firstCard.dataset.id, secondCard.dataset.id)
    
    checkCardsMatch()
}


    
}



function cardsMatch () {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
}


















function checkCardsMatch () { 
     setTimeout(() => {
    
    if (chosenCards.length === 8 && timer.innerHTML !== endtime){
       document.querySelector(".winLoss").innerHTML = ("you got it!") 
       pauseTime()



    }else if (wrongCards.length === 4){
       document.querySelector(".msg").innerHTML = "" 
       document.querySelector(".winLoss").innerHTML = ("you lose") 
        pauseTime()
    }
    
 }, 100)
}

console.log(chosenCards)


     



function cardsDontMatch () {
    setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    message.innerHTML = ""
    }, 500)
}



function pauseTime (){
    if (wrongCards.length === 4){
        timer.innerHTML = minutes + " : " + seconds
    }
    if (chosenCards === 8){
        timer.innerHTML = minutes + " : " + seconds
    }
}














// remove flipcard class from each card clicked and invoke game function again

// how do i access each card clicked? ()

function resetGame() {
   
    


}

console.log(resetGame)




resetButton.addEventListener("click", resetGame)


























































