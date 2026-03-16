function submitRSVP(){

const name=document.getElementById("name").value
const roll=document.getElementById("roll").value
const phone=document.getElementById("phone").value
const attend=document.getElementById("attend").value

if(!name || !roll || !phone || !attend){

alert("Please fill all fields")
return

}

if(attend==="yes"){

window.location.href="https://forms.gle/DBwomfZ3FvkBrrAm7"

}else{

alert("Thank you for informing us.")

}

}
