// 1st images

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImages = "dice"+ randomNumber1 +".png";

var randomimg = "images/"+randomImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimg);

/**2nd images**/

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages2 = "images/dice"+ randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

// if & else statement

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 won."
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player 2 won.."
}
else{
    document.querySelector("h1").innerHTML="same no onw won.."
}