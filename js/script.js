// COUNTDOWN

const eventDate = new Date("March 30, 2026 09:30:00").getTime();

setInterval(function(){

const now = new Date().getTime();
const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

},1000);



// SCROLL FADE ANIMATION

const sections=document.querySelectorAll(".fadeSection")

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top=section.getBoundingClientRect().top
const trigger=window.innerHeight*0.85

if(top<trigger){
section.classList.add("visible")
}

})

})
