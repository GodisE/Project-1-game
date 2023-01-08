///grabbing each card and getting a nodeList returned w document.querySelectorAll

const cards = document.querySelectorAll(".card")
const message = document.querySelector(".msg")
const winLossMsg = document.querySelector(".winLoss")
const playButton = document.querySelector(".playButton") 
const resetButton = document.querySelector("#reset")
const resetButtonId = document.querySelector("#hide")
const timer = document.querySelector("#timer")
const gameBoard = document.querySelector(".hide")
const startingTime = 0
//define variable to a boolean to check if cards are flipped
//define variable to a boolean for the same card not to register as a match
//define card variables to represent the click of each


playButton.addEventListener("click", switchPage)


function switchPage (){
    const cardsHidden = document.querySelector(".hide")
    cardsHidden.style.display = "block"
    document.getElementById("hide").style.display = this.style.display = "none"
    }

     
    
    // console.log("worked")













const cardsArray = Array.from(cards)

console.log(cardsArray)

//when a match is made put it in here
chosenCards = []
wrongCards = []
let flippedCard = false
let firstCard
let secondCard
let endtime = "00:00"
let time = startingTime * 60 
let minutes = 0
let seconds = 0



const updateCountdown = setInterval(() =>{
    
   
    let minutes = Math.floor(time / 60) 
    let seconds = Math.floor(time % 60 )
    time++;
    timer.innerHTML = minutes + " : " + seconds
   

    
}, 1000)




//create a function to flip cards

function flipCard () {
//this represents the element that was clicked 
this.classList.add("flip")

if (!flippedCard){

    flippedCard = true
    firstCard = this

} else {

    flippedCard = false
    secondCard = this
checkForMatch()






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
       document.querySelector(".winLoss").innerHTML = ("you win!") 
       clearInterval(updateCountdown)



    }else if (wrongCards.length === 4){
       document.querySelector(".msg").innerHTML = "" 
       document.querySelector(".winLoss").innerHTML = ("you lose") 
       clearInterval(updateCountdown)
       
    }
    
 }, 100)
}



     



function cardsDontMatch () {
    setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    message.innerHTML = ""
    }, 500)
}












// remove flipcard class from each card clicked and invoke game function again

// how do i access each card clicked? ()

function resetGame() {
    //hiding the restart game button
    document.getElementById("hide").style.display = "initial"
    //removing the flip class from each card onlick of reset buttom
    for (let i = 0; i < cardsArray.length; i++){
        cardsArray[i].classList.remove("flip")
    }
    resetButton.classList.add("hide")
    //invoke functions to replay game
   resetTimer()
   
    checkCardsMatch()

}

function resetTimer(){
    clearInterval(updateCountdown)
    let minutes = Math.floor(time / 60) 
    let seconds = Math.floor(time % 60 )
    time++;
    timer.innerHTML = minutes + " : " + seconds
}



resetButton.addEventListener("click", resetGame)



























































