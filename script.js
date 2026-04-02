let helmetWorn = false;
let alcoholDetected = false;

function wearHelmet() {
    helmetWorn = true;
    document.getElementById("helmet").innerText = "Worn ✅";
}

function detectAlcohol() {
    alcoholDetected = Math.random() > 0.5;

    if (alcoholDetected) {
        document.getElementById("alcohol").innerText = "Alcohol Detected ❌";
    } else {
        document.getElementById("alcohol").innerText = "Safe ✅";
    }
}

function simulateAccident() {
    document.getElementById("accident").innerText = "Accident Detected 🚨";
    alert("🚨 Emergency Alert Sent to Family!");
}

function startBike() {
    if (helmetWorn && !alcoholDetected) {
        document.getElementById("bike").innerText = "ON ✅";
    } else {
        alert("❌ Cannot Start Bike!\nWear Helmet & No Alcohol Required");
    }
}
