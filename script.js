//grabbing each card and getting a nodeList returned w document.querySelectorAll

const cards = document.querySelectorAll(".card")
const message = document.querySelector(".msg")
//define variable to a boolean to check if cards are flipped
//define variable to a boolean to 
//define card variables to represent the click of each

const cardsArray = Array.prototype.slice.call(cards)




let flippedCard = false
let lockBoard = false
let firstCard, secondCard
let endtime = "00:00"



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
//if lockBoard = false, then check for match
if(lockBoard){
        checkForMatch()
    }

//if this is deeply equal to the first cards info, then check for match
if(this === firstCard){
    checkForMatch()
}
//adding .flip from css to each card
this.classList.add("flip")

//if flipped card is true, change the defined boolean to true, and the 
    //first card will equal the info inside the div of the card clicked
if (!flippedCard){
    
    flippedCard = true;
    firstCard = this
//otherwise, the second card will equal the info inside the div of card clicked,
    //and will check for a match of the first/second
    }else{ 

        secondCard = this 

    checkForMatch()
    }   
}


//create a function to check for matches

function checkForMatch(){
    //if the info inside the div of the first card matches the info inside
        //the second card, then incoke the matching cards function
    if (timer !== endtime)
    if(cardsArray[0] === cardsArray[1] 
        // cardsArray[2] === cardsArray[3] &&
        // cardsArray[4] ===  cardsArray[5] && 
        // cardsArray[6] ===  cardsArray[7]  
    ){
        document.querySelector(".msg").innerHTML ("You won!")
    //otherwise, invoke the not matching function
    // }else {
    //     notMatching()
    }
}

function matchingCards (){
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    
    document.querySelector(".msg").innerHTML = "Yes!"
    reset()
}





function notMatching (){
    lockBoard = true
    setTimeout(() => { 
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        reset()
        }, 700)
        
}

function reset (){
    flippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
   
}

(function shuffleCards(){
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 9)
        cards.style = randomNum
    })
})()

cards.forEach(card => card.addEventListener("click", flipCard))






























































const startingTime = 2
let time = startingTime * 60 
let minutes = Math.floor(time / 60) 
let seconds = Math.floor(startingTime % 60 )
const timer = document.querySelector("#timer")







