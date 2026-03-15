let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let message = document.getElementById("message");

let clickCount = 0;

let texts = [
"na pewno nie?",
"pomyśl jeszcze 🥺",
"no weź",
"naprawdę?",
"proszęę",
"prooosze",
"prooosze",
"prooosze"
];

yesBtn.onclick = function(){
message.innerText = "JUPIII wiedziałem że powiesz TAK 💖";
}

noBtn.onclick = function(){

clickCount++;

if(clickCount < texts.length){
noBtn.innerText = texts[clickCount];
}

// zmniejsza się tylko do momentu uciekania
if(clickCount < 5){

let noScale = 1 - clickCount * 0.1; // wolniejsze zmniejszanie
if(noScale < 0.5) noScale = 0.5;

noBtn.style.transform = `scale(${noScale})`;

}

// TAK rośnie
let yesScale = 1 + clickCount * 0.35;
yesBtn.style.transform = `scale(${yesScale})`;


// ostatnie kliknięcia – ucieka
if(clickCount >= 5 && clickCount < 8){

let x = Math.random() * (window.innerWidth - 150);
let y = Math.random() * (window.innerHeight - 100);

noBtn.style.position = "absolute";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

}

// koniec
if(clickCount >= 8){
noBtn.style.display = "none";

yesBtn.style.transform = "scale(3)";
yesBtn.innerText = "TAK 💚";
}

}