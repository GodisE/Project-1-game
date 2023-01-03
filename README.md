# Concentration game

## WHAT THE GAME WILL BE ABOUT

-A memory game that will require players to match cards of the same picture
-The player will have a limited amount of time to 
match 6 pairs of pictures
-Player will also lose the game if the timer runs out


## HOW TO PLAY

1. Find the 3 pairs of matching pictures before the
timer runs  out
2. click on each image and remember where it is, try to find a match to that picture
3.  This game is all about memory! So try and remember where the images are placed


## MV USER-STORIES

-As a user i want to start the game
 
1. in js:

`let gameName`
`initialize()`
`function initialize () {`
            `gameName = new Parameters()`
        `}`

> initialize function to call other created objects that start the game 
    
> initialize() is used to start the app in a web server
     
> place new game inside the initialize function to update the DOM with our set classes, functions, etc
> instanitate the class by using the keyword new 
    to create a new object of our class, runs the constructor function in the class, returns the object and updates the DOM with all the 
    properties and methods from the class

       
**-As a user i want to click the play button**

1. in my html:
     `<button id="play-button">Play game</button>`

2. in my js:


    `const playButton = document.querySelector("#play-button")`
        `playButton.addEventLister("click", () => {`
        `})`

 > add an eventListener to this button


**-As a user i want to have a starter page**

1. in my HTML:
        `<main id="starterPage">`
                `<div class="playButton">`
                `</main>`

**-As a user i want to have a gameboard**

1. in my html:
    `<main id="gameBoard" class="hide">`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
    </main>`
    > 8 empty divs as place holder for cards

2. in my css:
this will be mostly css

3. in my js:
`const gameBoard = document.querySelector("#gameBoard")`

**-As a user i want to be taken to another page where i can see the game-board**

1. in my HTML:
    `<main id="gameBoard" class="hide">`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
        `<div></div>`
    `</main>`

2. in my js:
        `const playButton = document.querySelector(".playButton")`
        `const gameBoard = document.querySelector(".gameBoard")`
        `playButton.addEventListener("click", () => {`
        `gameBoard.classList.remove(hide)`
        `starterPage.classList.add(hide)`
        `})`

3. in my css:
        `.hide{`
            `display: none`
        `}`

**-As a user i want to able to increase points**

1. in my html:
2. in my css:
3. in my js:

`class MemoryGame {`
    `constructor(points){`
        `this.points = points`
    `}`
    `addPoints(){`
        `if(winningCombos === true){`
           ` this.points = 10`
        `}`
    `}`
`}`


> creating a class to set the properties of the game
> creating a method that will add points based on how many matches are correct
> if the player gets any of the indexes inside the winningCombos array,10 points will be added

**-As a user i want to be able to see my gameboard**

1. in my HTML:
        `<main id="gameBoard" class="hide">`
        `<div class="card" id="card"></div>`
        `<div class ="front1">`
            `<h1>front of card</h1>`
        `<div class="back1">`
            `<h1>back of card</h1>`
        `<div class ="front2">`
            `<h1>front of card</h1>`
        `<div class="back2">`
            `<h1>back of card</h1>`
        `<div class ="front3">`
            `<h1>front of card</h1>`
        `<div class="back3">`
            `<h1>back of card</h1>`
        `<div class ="front4">`
            `<h1>front of card</h1>`
        `<div class="back4">`
            `<h1>back of card</h1>`
        `<div class ="front5">`
            `<h1>front of card</h1>`
        `<div class="back5">`
            `<h1>back of card</h1>`
             `<div class ="front6">`
            `<h1>front of card</h1>`
        `<div class="back6">`
            `<h1>back of card</h1>`
        `<div class ="front7">`
            `<h1>front of card</h1>`
        `<div class="back7">`
            `<h1>back of card</h1>`
         `<div class ="front8">`
            `<h1>front of card</h1>`
        `<div class="back8">`
            `<h1>back of card</h1>`
        `</main>`

2. in my css:

    `#gameBoard {`
        `background-color: black`
        `border-radius: 25%`
        `height: 100px`
        `width: 50px`
        `justify-content: space-around`
        `display:flex`
    `}`
    `.card{`
        `position: relative`
        `width: 100%`
        `height: 100%`
        `transform-style: preserve-3d`
    `}`
    `.front {`
        `backface-visibility: hidden`
        `color: black`
        `justify-content: center`
        `height: 100%`
        `width: 100%`
        `background: orange`
    `}`
    `.back {`
        `backface-visibility: hidden`
        `color: white`
       ` justify-content: center`
       ` height: 100%`
        `width: 100%`
        `background: red`
        `transform: rotateY(180deg)`
    `}`

    `.flipCard {`
        `transform: rotateY(180deg)`
    `}`
3. in my js:

`const card = document.querySelector("#card")`

`card.addEventListener("click", flipCard)`

`function flipCard(){`
    `card.classList.toggle("flipCard")`
`}`

**-As a user i want to reset the game**


1. in my html:
    `<button id="reset-button">Reset Game</button>`
2. in my js:
   `const resetButton = document.querySelector("#reset-button")`
    `resetButton.addEventListener = ("click" => {
        alert("Starting game...")`
    })`

    `const render = () => {}`

    `render()`

> make a render function and call it at the end of code
> call render() after the eventListener to update the state of the DOM
>The bulk of the code will exist in render() but i dont understand how yet
    

**-As a user i want to have a message that tells me i won/lost**


1. in my html:
    `<div id="msgBoard">`
2. in my js
    `const msgBoard = document.querySelector("#msgBoard")`

    `msgBoard.addElement("h1")`
    `h1.innerText = ("You won!/You Lost!")`

**-As a user i want to keep track of scores**


1. in my html:
    `<div class="p1-score">`

2. in my js:
   `const p1Score = document.querySelector(".p1-score")` 
`let score = 0`
`correctPair(){`
        `score = `
`}`
 `class Points {`
        `constructor()`
`}`

> assigning a variable named score to keep track of scores   
> creating a method that adds points to score 
> each time a pair is matched correctly  
> creating a class to run the properties through needed for game 

**-As a user i want to see my timer**

1. in my html:
`<p id="countdown">10:00</p>`

2. in my css:
`p {
    background-color: white;
    display: inline-flex
    align-items: center
}`

3. in my js:
`const startingTime = 10`
`let time = startingTime * 60 `
`const countdown = document.querySelector("#countdown")`

`function updateCountdown() {`
    `const minutes = Math.floor(time / 60)`
    `let seconds = time % 60`
    `countdown.innerHTML = minutes " : " seconds`
    `time--}`
    `setInterval(function updateCountdown() =>{`
    `const minutes = Math.floor(time / 60)`
    `let seconds = time % 60`
    `countdown.innerHTML = minutes " : " seconds`
    `time--}`
    `if (minutes === 0 && seconds === 0){`
       `document.querySelector("#countdown").innerHtml = "00:00"`
    `}else{`
        `document.querySelector ("#countdown").innerHTML = minutes + " : " + seconds`
    `}`
`})`

>declare a variable a that holds the number we want the timer to start at
> declare a variable that holds the total time, multiplying by 60 bc we want every second to be counted
> grabbing the timer element from the HTML
> updating the html of countdown to current time
> we're decreasing the time from the starting time
> using setInerval() to repeatedly execute a code block creating a function to update the timer as it counts down
> updating the html of countdown to current time
> we're decreasing the time from the starting time
> if the timer runs out, the display if timer will show "00:00"

**-As a user i want to know if i won**
1. in my html:
    `<div id="msgBoard">`

2. in my css:

3. in my js:
   `const msgBoard = document.querySelector("#msgBoard")`
        
     `msgBoard.addElement("p"){`
    `msgBoard.innerText("YOU WON!")`
    `}`

**-As a user i want to know if i lost**
1. in my html:
    `<div id="msgBoard">`

2. in my css:

3. in my js:
   `const msgBoard = document.querySelector("#msgBoard")`
        
    `msgBoard.addElement("p"){`
    `msgBoard.innerText("YOU LOST! :(")`
    `}`

**-As a user i want to know when the time is out**
1. in my html:
`<p id="timesUp"></p>`

2. in my js:

    `const timesUp = doument.querySelector("#timesUp")`
    `if (minutes === 0 && seconds === 0){`
        `document.querySelector("#timesUp").innerText = "TIMES UP!",`
   ` }else{`
        `document.querySelector ("#countdown").innerHTML = minutes + " : " + seconds`
    `}`

> updating the dom to show a message once the timer has run out("00:00)

**-As a user i want to know if i got a match wrong**

1. in my html:
2. in my css:
3. in my js:

    `static winningCombos =[`
       ` [1,8],`
       ` [2,5],`
        `[3,7],`
        `[4,6],`
    `]`

    `winner(){`
        `if (winningCombos === [0] && [1] && [2] && [3]){`
        `alert ("correct!")`
   ` }else{`
        `alert ("incorrect!")`
    `}`
`}`
> create a array of winning combos that will never change(static)


## TIER2 USER STORIES
-play against another player
-have music
-multiple players
## TIER3 USER STORIES
-join an online game