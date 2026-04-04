function setStatus(id, text, isGood) {
    let el = document.getElementById(id);
    el.innerText = text;
    el.style.color = isGood ? "lightgreen" : "red";
}

// AUTO UPDATE
setInterval(() => {

    let helmetOk = Math.random() > 0.5;
    setStatus("helmet-status", helmetOk ? "Worn ✅" : "Not Worn ❌", helmetOk);

    let alcoholOk = Math.random() > 0.7;
    setStatus("alcohol-status", alcoholOk ? "Detected ❌" : "Safe ✅", !alcoholOk);

    let accident = Math.random() > 0.9;
    setStatus("accident-status", accident ? "Accident 🚨" : "Safe", !accident);

}, 3000);


// BIKE CONTROL
let bikeOn = false;
function toggleBike() {
    bikeOn = !bikeOn;
    document.getElementById("bike-status").innerText = bikeOn ? "ON ✅" : "OFF ❌";
}


// ALERT
function sendAlert() {
    alert("🚨 Emergency Alert Sent!");
}
