// const cardOne = document.querySelector(".one")
// const cardTwo = document.querySelector(".two")
// const cardThree = document.querySelector(".three")
// const cardFour = document.querySelector(".four")
// const cardFive = document.querySelector(".five")
// const cardSix = document.querySelector(".six")
// const cardSeven = document.querySelector(".seven")
// const cardEight = document.querySelector(".eight")

// const back1 = document.querySelector(".back1")
// const back2 = document.querySelector(".back2")
// const back3 = document.querySelector(".back3")
// const back4 = document.querySelector(".back4")
// const back5 = document.querySelector(".back5")
// const back6 = document.querySelector(".back6")
// const back7 = document.querySelector(".back7")
// const back8 = document.querySelector(".back8")


// cardOne.addEventListener("click", cardFlip)
                         
// cardTwo.addEventListener("click", cardFlip)

// cardThree.addEventListener("click", cardFlip)

// cardFour.addEventListener("click", cardFlip)

// cardFive.addEventListener("click", cardFlip)

// cardSix.addEventListener("click", cardFlip)

// cardSeven.addEventListener("click", cardFlip)

// cardEight.addEventListener("click", cardFlip)

const cards = document.querySelector(".card")

// function cardFlip() {
//   cardOne.classList.toggle("cardFlip")
  
// }

// function cardFlip() {
//   cardTwo.classList.toggle("cardFlip")
// }

// function cardFlip() {
//   cardThree.classList.toggle("cardFlip")
// }

// function cardFlip() {
//   cardFour.classList.toggle("cardFlip")
// }

// function cardFlip() {
//   cardFive.classList.toggle("cardFlip")
// }

// function cardFlip() {
//   cardSix.classList.toggle("cardFlip")
// }

// function cardFlip() {
//   cardSeven.classList.toggle("cardFlip")
// }

// function cardFlip() {
//   cardEight.classList.toggle("cardFlip")
// }

// setInterval( function cardFlip() {
//   cards.addEventListener("click", () => {
//     alert("clicked Gworl!")

// cards.classList.toggle("cardFlip")
// })
//   })
class Timer  {
  constructor (countdown, startingTime, endtime, timeleft){
    this.countdown = document.querySelector("#countdown")
    this.startingTime = startingTime
    this.endtime = 0
    this.timeleft = timeleft
  }
  getTime(){
    
  }
}





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
  