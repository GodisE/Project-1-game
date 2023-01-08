# Concentration game

## WHAT THE GAME WILL BE ABOUT

-A memory game that will require the player to match cards of the same picture
-The player will have 2 attempts to 
match 4 pairs of pictures
-If all pairs are matched, the player wins the game
-If the player gets 2 incorrect matches, the player loses


## HOW TO PLAY

1. Find the 4 pairs of matching pictures 
2. click on each image and remember where it is, try to find a match to that picture by clicking on another card
3.  This game is all about memory! So try and remember where the images are placed
4. There are 8 cards, meaning there are 4 pairs of
pictures. Find them all with less than 2 wrong guesses and you win the game!

## WIREFRAMES
![alt text](images/StarterPg.png)
![alt text](images/GamePg.png)


## MV USER-STORIES

**-As a user i want to start the game**
 
1.in my html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Game</title>
</head>
<link rel="stylesheet" href="style.css">

<body>
      <main id="starterPage">
  
    <button class="playButton">Play game!</button>
  
                </main> 
                <h1 class="winLoss"></h1>
                <h1 class="msg"></h1>

                
                    <p id="timer">2:00</p>
                      <h1 class="msg"></h1>
                          <section id="memory-game" class="hide">
                              <div class="card" data-id="burger">
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="burger" >
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pasta">
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pasta" >
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pizza" >
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pizza">
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                          </section>
                            <button id="reset">Reset Game</button>
                           
</body>   
   
                    
                    
<script src="script.js"></script>
</html>


```
2.  in js:

```
const cards = document.querySelectorAll(".card")

chosenCards = []
wrongCards = []

```
> create elements to hold starter page, timer, and the pictures of the front/back of cards
    
     
> Grab the cards created from HTML and make empty array's for wrong/right matches


       
**-As a user i want to click the play button**

1. in my html:
```
     <button class="playButton">Play game!</button>
```

2. in my js:
```
    const playButton = document.querySelector(".playButton") 

        playButton.addEventLister("click")

```
>create button in HTML
> add an eventListener to this button


**-As a user i want to have a starter page**

1. in my HTML:
```
       <main id="starterPage">
  
    <button class="playButton">Play game!</button>
  
                </main> 
```                
>create a main tag and place all elements that'll be on that page inside that tage, give it an id

**-As a user i want to have a gameboard**

1. in my html:
```
    <body>
      <main id="starterPage">
    <button class="playButton">Play game!</button>
                </main> 

                <h1 class="winLoss"></h1>
                <h1 class="msg"></h1>

                
                    <p id="timer">2:00</p>
                      <h1 class="msg"></h1>
                          <section id="memory-game" class="hide">
                              <div class="card" data-id="burger">
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="burger" >
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pasta">
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pasta" >
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pizza" >
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pizza">
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                          </section>
                            <button id="reset">Reset Game</button>
                           
</body>   

``` 


**-As a user i want to be taken to another page where i can see the game-board**

1. in my HTML:
```
    <h1 class="winLoss"></h1>

                
                    <p id="timer">2:00</p>
                      <h1 class="msg"></h1>
                          <section id="memory-game" class="hide">
                              <div class="card" data-id="burger">
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="burger" >
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pasta">
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pasta" >
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pizza" >
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pizza">
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                          </section>
                            <button id="reset">Reset Game</button>
                           
```
2. in my js:

```
const cards = document.querySelectorAll(".card")
const message = document.querySelector(".msg")
const winLossMsg = document.querySelector(".winLoss")
const playButton = document.querySelector(".playButton") 
const resetButton = document.querySelector("#reset")
const timer = document.querySelector("#timer")

```

3. in my css:

```
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  height: 100vh;
  background-color: thistle;
  display: flex;
}




#memory-game{
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 1200px ;
  height: 600px ;
}


.card{
  margin: 5px;
  width: calc(25% - 10px);
  height: calc(50% - 10px);
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform .5s;
}

```
>select all elements that exist within the gameboard to add easy functionality to them

>Add styling to the gameboard

**-As a user i want to be able to see my gameboard**

1. in my HTML:

```
       <h1 class="winLoss"></h1>

                
                    <p id="timer">2:00</p>
                      <h1 class="msg"></h1>
                          <section id="memory-game" class="hide">
                              <div class="card" data-id="burger">
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="burger" >
                                <img src="images/burger.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="fries">
                                <img src="images/fries.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pasta">
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pasta" >
                                <img src="images/pasta.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card"data-id="pizza" >
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                              <div class="card" data-id="pizza">
                                <img src="images/pizza.png" alt="" class="front">
                                <img src="images/question.png" alt="" class="back">
                              </div>
                          </section>
                            <button id="reset">Reset Game</button>
```                           

2. in my css:
```
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  height: 100vh;
  background-color: thistle;
  display: flex;
}




#memory-game{
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 1200px ;
  height: 600px ;
}


.card{
  margin: 5px;
  width: calc(25% - 10px);
  height: calc(50% - 10px);
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform .5s;
}

```
3. in my js:

```
playButton.addEventListener("click", switchPage)


function switchPage (){
    const cardsHidden = document.querySelector(".hide")
    const gameButton =  document.querySelector(".playButton")
    if  (cardsHidden.style.display = "block"){
       gameButton.style.display = "block"
    }
    }



```
>add an event listener to the play button, so when its clicked it'll invoke the switchPage function, which takes the player to view the page

>create a function that'll hide the play button and show the gameboard when clicked

**-As a user i want to reset the game**


1. in my html:
```
 <button onClick="window.location.reload();">Restart Game</button>

```
>Reloading the entire game when the user clicks the reset button

    

**-As a user i want to have a message that tells me i won/lost**


1. in my html: 
```
    <h1 class="msg"></h1

```
2. in my js
```
    if (chosenCards.length === 8 ){
       document.querySelector(".winLoss").innerHTML = ("you got it!") 
      



    }else if (wrongCards.length === 4){
       document.querySelector(".msg").innerHTML = "" 
       document.querySelector(".winLoss").innerHTML = ("you lose") 
       
    }
```
> create a empty h1 tag and give it a class 

> if else statement to fill the empty h1 tag 



**-As a user i want to see my timer**

1. in my html:
```
<p id="timer">00:00</p>

```
2. in my css:
```
p {
    background-color: black;
    align-items: center;
    text-align: center;
    color: white;
    margin: auto;
    justify-content: center;
    padding: 30px 5px 10px 5px; 
    border: 5px;
    height: 50px;
    width: 100px;
    border-radius: 100%;
  
}

```
>create a p tag and place the start time inside

>give it styling so its visible to player

**-As a user i want to know if i won**
1. in my html:
```
    <h1 class="winLoss"></h1>

```

2. in my js:
```
   if (chosenCards.length === 8 ){
       document.querySelector(".winLoss").innerHTML = ("you got it!") 
```
>create a empty h1 tag and give it a class name

>create a if else statement that tells the player if they've won

**-As a user i want to know if i lost**
1. in my html:
```
    <h1 class="winLoss"></h1>

```

2. in my js:
```
  const winLossMsg = document.querySelector(".winLoss")

  if (wrongCards.length === 4){
       document.querySelector(".msg").innerHTML = "" 
       document.querySelector(".winLoss").innerHTML = ("you lose") 
       
    }

```
>create a empty h1 tag and give it a class name

>create a if else statement that tells the player if they've lost

**-As a user i want to see timer count up**
1. in my html:
```
<p id="timer">00:00</p>

```
2. in my js:

```
const updateCountdown = setInterval(() =>{
    
   
    let minutes = Math.floor(time / 60) 
    let seconds = Math.floor(time % 60 )
    time++;
    timer.innerHTML = minutes + " : " + seconds
   

    
}, 1000)
```

> updating the dom to show a the timer counting up

**-As a user i want to know if i got a match wrong**

1. in my html:
```
<h1 class="msg"></h1>

```
2. in my js:
```
   cardsDontMatch()
    message.innerHTML = ("not quite!")


    function cardsDontMatch () {
    setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    message.innerHTML = ""
    }, 500)
}

```
>if cards dont match fill the empty h1 tag with text

>create a function to detect if cards are a match, if not, remove the flip class

**-As a user i want to know when the game is over**
1. in my html:
  ```
  <h1 class="winLoss"></h1>

  ```

2. in my js:

```
wrongCards = []
chosenCards=[]

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
```
>create a function to check if our empty arrays are full, and fill the inner html of empty tag element based on the length of the arrays

## TIER2 USER STORIES

**-As a user I want to play against another player**
**-As a user I want to have music**
**-As a user I want to multiple players**
**-As a user i want to increase points**

## TIER3 USER STORIES

**-As a user I want to join an online game**