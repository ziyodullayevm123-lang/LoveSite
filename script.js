// ======== Elementlar ========

const pages = document.querySelectorAll(".page");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextQuestion");

const question = document.getElementById("question");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const hearts = document.querySelector(".hearts");

// ======== Savollar ========

const questions = [

"Men bilan gaplashish yoqadimi? 😊",

"Meni sog'inasanmi? ❤️",

"Men seni kuldira olamanmi? 😄",

"Menga ishonasanmi? 🥹"

];

let index = 0;

// ======== Sahifani almashtirish ========

function showPage(page){

pages.forEach(p=>p.classList.remove("active"));

document.getElementById(page).classList.add("active");

}

// ======== Boshlash ========

startBtn.onclick = ()=>{

showPage("page2");

question.innerHTML = questions[0];

}

// ======== Savollar ========

nextBtn.onclick = ()=>{

index++;

if(index < questions.length){

question.innerHTML = questions[index];

}else{

showPage("page3");

}

}

// ======== Qochadigan tugma ========

let scale = 1;

no.addEventListener("touchstart",moveButton);
no.addEventListener("mouseover",moveButton);

function moveButton(){

const area = document.querySelector(".buttons");

const w = area.offsetWidth - 120;

const h = area.offsetHeight - 60;

no.style.left = Math.random()*w+"px";

no.style.top = Math.random()*h+"px";

scale += 0.1;

yes.style.transform = `scale(${scale})`;

}

// ======== HA bosilganda ========

yes.onclick = ()=>{

showPage("page4");

confetti();

}

// ======== Yuraklar ========

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = ["❤️","💖","💕","💘"][Math.floor(Math.random()*4)];

heart.style.left = Math.random()*100+"vw";

heart.style.fontSize = (18+Math.random()*20)+"px";

heart.style.animationDuration = (4+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,350);

// ======== Konfetti ========

function confetti(){

for(let i=0;i<180;i++){

let c=document.createElement("div");

c.innerHTML=["❤️","💖","💕","🌹","✨"][Math.floor(Math.random()*5)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(18+Math.random()*18)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform=`translateY(120vh) rotate(${Math.random()*720}deg)`;

},50);

setTimeout(()=>{

c.remove();

},4500);

}

}