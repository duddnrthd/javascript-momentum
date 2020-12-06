const imageBody = document.querySelector("body");


function paintImage(number){
    const image = new Image();
    image.src = `img/${number+1}.jpg`
    body.appendChild(image);

}

function genRandomNumber(){
    const randomNumber = Math.floor(Math.random()*3);
    return randomNumber;
}

function init(){
    const RandomNumber = genRandomNumber();
    paintImage(RandomNumber);
}

init()