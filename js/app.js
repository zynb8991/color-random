const ColorCode = document.getElementById('colorCode');
const btnRgaColor = document.getElementById('rgbColor');
const btnhexColor = document.getElementById('hexColor');
const hexCode = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "a" , "b" , "c" , "d" , "e" , "f"]

// rgb color
btnRgaColor.addEventListener("click" , function(){
    let Rgbcolor= `rgb(${getRandomNumber(255)} , ${getRandomNumber(255)} , ${getRandomNumber(255)})`;
    document.body.style.backgroundColor = Rgbcolor;
    ColorCode.textContent =`rgb Color Code: ${Rgbcolor}`;
})

// hex color
btnhexColor.addEventListener('click' , function(){
    let hexcolor = "#"
    for(let i=0 ; i < 6 ; i++){
        hexcolor  += hexCode[getRandomNumber(hexCode.length)]
    }
    document.body.style.backgroundColor = hexcolor;
    ColorCode.textContent = `hex Color Code: ${hexcolor}`
})

// get random number
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}