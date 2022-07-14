var randomNumer1 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc1 = "/images/dice" + randomNumer1 + ".png";

var randomNumer2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc2 = "/images/dice" + randomNumer2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if(randomNumer1<randomNumer2){
    document.querySelector("h1").innerHTML ="Player 2 Win🚩"
} else if(randomNumer1>randomNumer2){
    document.querySelector("h1").innerHTML ="🚩Player 1 Win"
} else{
    document.querySelector("h1").innerHTML ="🚩Draw🚩"
}
