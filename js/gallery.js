const PHOTO_API =
"https://script.google.com/macros/s/AKfycby-fl8qfCAsofG8RYp9pPLKK73W6KndoIPeKszEJEUaIJprEG9wJkwufdKDcTAkCSIIkg/exec?type=photos";

async function loadGallery(){

try{

const response = await fetch(PHOTO_API)

const photos = await response.json()

const track = document.getElementById("carouselTrack")

track.innerHTML=""

photos.forEach(url=>{

const img=document.createElement("img")
img.src=url

track.appendChild(img)

})

track.innerHTML += track.innerHTML

}

catch(error){

console.log("gallery error",error)

}

}

loadGallery()