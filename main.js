let o = 0
toto = setInterval(backcolor ,100)
function backcolor(){
    document.querySelector(".land").style.backgroundImage = `linear-gradient(${o}deg, #9c27b0, #673ab7, #e91e63)`;
    o += 3
}
backcolor()

let btn = document.querySelector('.btn');

function chat(){
    let num = document.querySelector('.num');
    window.open(`https://wa.me/+2${num.value}`, '_blank').focus()
    num.value = ""
}
btn.addEventListener('click',chat)