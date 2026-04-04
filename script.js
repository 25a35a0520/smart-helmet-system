// Real-time simulation
setInterval(() => {

    let helmet = Math.random() > 0.5 ? "Worn ✅" : "Not Worn ❌";
    document.getElementById("helmet-status").innerText = helmet;

    let alcohol = Math.random() > 0.7 ? "Detected ❌" : "Safe ✅";
    document.getElementById("alcohol-status").innerText = alcohol;

    let accident = Math.random() > 0.9 ? "Accident 🚨" : "Safe";
    document.getElementById("accident-status").innerText = accident;

}, 3000);


// Bike ignition
let bikeOn = false;
function toggleBike() {
    bikeOn = !bikeOn;
    document.getElementById("bike-status").innerText = bikeOn ? "ON ✅" : "OFF ❌";
}


// Emergency alert
function sendAlert() {
    alert("🚨 Emergency Alert Sent with Location!");
}


// Dark/Light mode
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
