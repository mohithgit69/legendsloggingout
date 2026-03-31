


// ================= SCROLL FADE =================

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


// ================= MEMORIES SYSTEM =================

// 🔧 EDIT THESE
const memoriesEventDate = new Date("March 30, 2026 12:00:00").getTime();
const albumLink = "https://drive.google.com/drive/folders/1U-sn2JubTCHOVKlMaeSuDPbj3Xsi2qaz?usp=sharing";

// elements
const memLocked = document.getElementById("locked");
const memUnlocked = document.getElementById("unlocked");
const memCountdown = document.getElementById("memCountdown");
const albumBtn = document.getElementById("albumBtn");

if(memLocked && memUnlocked){

if(albumBtn) albumBtn.href = albumLink;

function updateMemories(){

const now = new Date().getTime();
const diff = memoriesEventDate - now;

if(diff <= 0){
memLocked.style.display = "none";
memUnlocked.classList.remove("hidden");
return;
}

const hours = Math.floor(diff/(1000*60*60));
const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

if(memCountdown){
memCountdown.innerHTML = `Unlocks in ${hours}h ${minutes}m`;
}

}

setInterval(updateMemories,1000);
updateMemories();

}


// ================= QR AUTO SCROLL =================

window.addEventListener("load", ()=>{

if(window.location.hash === "#memories"){

setTimeout(()=>{
document.getElementById("memories").scrollIntoView({
behavior:"smooth"
});
},500);

}

});
