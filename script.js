// Status function with colors
function setStatus(id, text, isGood) {
    let el = document.getElementById(id);
    el.innerText = text;
    el.style.color = isGood ? "lightgreen" : "red";
}

// Auto update (simulation)
setInterval(() => {

    let helmetOk = Math.random() > 0.5;
    setStatus("helmet-status", helmetOk ? "Worn ✅" : "Not Worn ❌", helmetOk);

    let alcoholOk = Math.random() > 0.7;
    setStatus("alcohol-status", alcoholOk ? "Detected ❌" : "Safe ✅", !alcoholOk);

    let accident = Math.random() > 0.9;
    setStatus("accident-status", accident ? "Accident 🚨" : "Safe", !accident);

}, 3000);


// Bike control
let bikeOn = false;
function toggleBike() {
    bikeOn = !bikeOn;
    document.getElementById("bike-status").innerText = bikeOn ? "ON ✅" : "OFF ❌";
}


// Emergency alert
function sendAlert() {
    alert("🚨 Emergency Alert Sent!");
}
