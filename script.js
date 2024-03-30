let numturns = 1;
let title = document.querySelector(".title");
let topleft = document.querySelector(".topLeft");
let ptopleft = document.querySelector(".ptopLeft");
let topcenter = document.querySelector(".topCenter");
let ptopcenter = document.querySelector(".ptopCenter");
let topright = document.querySelector(".topRight");
let ptopright = document.querySelector(".ptopRight");
let middleleft = document.querySelector(".middleLeft");
let pmiddleleft = document.querySelector(".pmiddleLeft");
let middlecenter = document.querySelector(".middleCenter");
let pmiddlecenter = document.querySelector(".pmiddleCenter");
let middleright = document.querySelector(".middleRight");
let pmiddleright = document.querySelector(".pmiddleRight");
let bottomleft = document.querySelector(".bottomLeft");
let pbottomleft = document.querySelector(".pbottomLeft");
let bottomcenter = document.querySelector(".bottomCenter");
let pbottomcenter = document.querySelector(".pbottomCenter");
let bottomright = document.querySelector(".bottomRight");
let pbottomright = document.querySelector(".pbottomRight");

function whoWon(){
    if(game.check("x") == "x won"){
        title.innerText = player1.name+" won! (x)";
        title.classList.add("x-mark");
    }
    else if(game.check("o") == "o won"){
        title.innerText = player2.name+" won! (o)";
        title.classList.add("o-mark")
    }
    else if(game.check() == "tie"){
        title.innerText = "No one won! It's a tie!";
    }
}
function updateScreen(board, pboard, position){
    if(game.check("x") == "undecided"&&game.check("o")=="undecided"&& board=="empty"){
        if(numturns%2==0){
            game.turn(board, position);
            pboard.innerText= player2.value;
            pboard.classList.add("o-mark");
            numturns++;
        }
        else{
            game.turn(board, position);
            pboard.innerText = player1.value;
            pboard.classList.add("x-mark");
            numturns++;
        }
        whoWon();
    }
}


let gameboard = (function(){
    let topLeft = "empty";
    let topCenter = "empty";
    let topRight = "empty";

    let middleLeft = "empty";
    let middleCenter = "empty";
    let middleRight = "empty";

    let bottomLeft = "empty";
    let bottomCenter = "empty";
    let bottomRight = "empty";

    return {topLeft, topCenter, topRight, middleLeft, middleCenter, middleRight, bottomLeft, bottomCenter, bottomRight}
})();

let game = (function(){
    let amtOfTurns = 1;
    let outcome = "undecided"
    let player = "null";
    function check(value){
        if((value==gameboard.topLeft && value==gameboard.middleCenter && value==gameboard.bottomRight)||(value==gameboard.bottomLeft && value==gameboard.middleCenter && value==gameboard.topRight)||(value==gameboard.topLeft && value==gameboard.topCenter && value==gameboard.topRight)||(value==gameboard.middleLeft&&value==gameboard.middleCenter&&value==gameboard.middleRight)||(value==gameboard.bottomLeft && value==gameboard.bottomCenter && value==gameboard.bottomRight)||(value==gameboard.topLeft && value==gameboard.middleLeft && value==gameboard.bottomLeft)||(value==gameboard.topCenter&&value==gameboard.middleCenter&&value==gameboard.bottomCenter)||(value==gameboard.topRight&&value==gameboard.middleRight&&value==gameboard.bottomRight)){
            if(value=="x"){
                outcome = "x won";
            }
            else{
                outcome = "o won";
            }
            symbol = value;
            return outcome;
        }
        else if(gameboard.topLeft != "empty" && gameboard.topCenter != "empty" && gameboard.topRight != "empty" && gameboard.middleLeft != "empty" && gameboard.middleCenter != "empty" && gameboard.middleRight != "empty" && gameboard.bottomLeft != "empty" && gameboard.bottomCenter != "empty" && gameboard.bottomRight != "empty"){
            outcome = "tie"
            return outcome;
        }
        else{
            return outcome;
        }
    }
    function turn(place, placeName){
        if(amtOfTurns%2==0){
            player= player2;
        }
        else{
            player = player1;
        }
        amtOfTurns++;
        if(place == "empty"){
            if(placeName=="topLeft"){
                gameboard.topLeft = player.value;
            }
            else if(placeName=="topCenter"){
                gameboard.topCenter = player.value;
            }
            else if(placeName=="topRight"){
                gameboard.topRight = player.value;
            }
            else if(placeName=="middleLeft"){
                gameboard.middleLeft = player.value;
            }
            else if(placeName=="middleCenter"){
                gameboard.middleCenter = player.value;
            }
            else if(placeName=="middleRight"){
                gameboard.middleRight = player.value;
            }
            else if(placeName == "bottomLeft"){
                gameboard.bottomLeft = player.value;
            }
            else if(placeName == "bottomCenter"){
                gameboard.bottomCenter = player.value;
            }
            else if(placeName == "bottomRight"){
                gameboard.bottomRight = player.value;
            }
        }
        return check(player.value);
    }
    return {outcome, check, turn, amtOfTurns}
})()


function player(name, value){
    return {name, value}
}

player1= player("Player 1", "x")
player2=player("Player 2", "o")

topleft.addEventListener("click", function(){
    console.log(game.check("x"))
    console.log(game.check("o"))
    updateScreen(gameboard.topLeft, ptopleft, "topLeft")
})

topcenter.addEventListener("click", function(){
    updateScreen(gameboard.topCenter, ptopcenter, "topCenter")
})

topright.addEventListener("click", function(){
    updateScreen(gameboard.topRight, ptopright, "topRight")
})

middleleft.addEventListener("click", function(){
    updateScreen(gameboard.middleLeft, pmiddleleft, "middleLeft")
})

middlecenter.addEventListener("click", function(){
    updateScreen(gameboard.middleCenter, pmiddlecenter, "middleCenter")
})

middleright.addEventListener("click", function(){
    updateScreen(gameboard.middleRight, pmiddleright, "middleRight")
})

bottomleft.addEventListener("click", function(){
    updateScreen(gameboard.bottomLeft, pbottomleft, "bottomLeft")
})

bottomcenter.addEventListener("click", function(){
    updateScreen(gameboard.bottomCenter, pbottomcenter, "bottomCenter")
})

bottomright.addEventListener("click", function(){
    updateScreen(gameboard.bottomRight, pbottomright, "bottomRight")
})