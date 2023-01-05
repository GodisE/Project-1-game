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





const startingTime = 1
let time = startingTime * 60 
let minutes = Math.floor(time / 60) 
let seconds = Math.floor(startingTime % 60 )
let endtime = "00:00"
const timer = document.querySelector("#timer")






const updateCountdown = setInterval(() =>{
    time--;
    const startingTime = 1
    let minutes = Math.floor(time / 60) 
    let seconds = Math.floor(startingTime % 60 )
    let endtime = "00:00"
    minutes = minutes - 1;
    seconds = seconds - 1;
    timer.innerHTML = minutes + " : " + seconds
    if (minutes == 0 && seconds == 0){
      clearInterval (updateCountdown)
   } 

    
}, 1000);
  




    setInterval(function updateCountdown(startingTime) {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    timer.innerHTML = minutes + " : " + seconds
    time --}, 1000)
    


// //variable to hold starting time that'll never change
// const startingTime = 10
// //variable to hold total time that will change as mins and secs change
// let time = startingTime * 60 
// //variable to hold minutes 
// let minutes = Math.floor(time / 60) 
// //variable to hold seconds
// let seconds = startingTime % 60 
// //variable that holds the time we're counting down to or the end time
// let endTime = new startingTime("00:00")
// //grabbing timer element from HTML
// const countdown = document.querySelector("#countdown")

// //creating a variable that holds our time counting down function
// //using setInterval() to keep calling the function every second (,1000)
// //passing an arrow function into setInterval() that's counting down our time and
// //updating the DOM
// const countdown = setInterval(() => {
//   time--;
//   timer.innerHTML = "10: " + time;
//   if (time <= 0 || time < 1 ){
//     clearInterval(countdown)
//   }
// },1000)
// timer.innerHTML = time