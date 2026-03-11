const COUNTER_API = "https://script.google.com/macros/library/d/1rAkt3oeMgi3gIpbMGooupzvwLsXtE3BCd3dvxsjMxpmQ4_gV1X8kO2R1/1"

async function loadCounter(){

const response = await fetch(COUNTER_API)

const data = await response.json()

document.getElementById("rsvpCounter").innerText = data.count

}

loadCounter()

setInterval(loadCounter,5000)