// countdown timer

const eventDate = new Date("March 30, 2026 18:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();
const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days + "d " +
hours + "h " +
minutes + "m " +
seconds + "s";

},1000);



// RSVP redirect

function submitRSVP(){

const name = document.getElementById("name").value
const roll = document.getElementById("roll").value
const phone = document.getElementById("phone").value
const attend = document.getElementById("attend").value

if(!name || !roll || !phone || !attend){

alert("Please fill all fields")
return

}

if(attend === "yes"){

window.location.href =
"https://forms.gle/DBwomfZ3FvkBrrAm7"

}

else{

alert("Thank you for informing us.")

}

}