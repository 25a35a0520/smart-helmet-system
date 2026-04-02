// ----------------------
// SMART HELMET VARIABLES
// ----------------------
let helmetWorn = false;
let alcoholDetected = false;

// ----------------------
// HELMET FUNCTION
// ----------------------
function wearHelmet() {
    helmetWorn = true;
    document.getElementById("helmet").innerText = "Worn ✅";
}

// ----------------------
// ALCOHOL DETECTION
// ----------------------
function detectAlcohol() {
    alcoholDetected = Math.random() > 0.5;

    if (alcoholDetected) {
        document.getElementById("alcohol").innerText = "Alcohol Detected ❌";
    } else {
        document.getElementById("alcohol").innerText = "Safe ✅";
    }
}

// ----------------------
// ACCIDENT SIMULATION
// ----------------------
function simulateAccident() {
    document.getElementById("accident").innerText = "Accident Detected 🚨";
    alert("🚨 Emergency Alert Sent to Family!");
}

// ----------------------
// BIKE START LOGIC
// ----------------------
function startBike() {
    if (helmetWorn && !alcoholDetected) {
        document.getElementById("bike").innerText = "ON ✅";
    } else {
        alert("❌ Cannot Start Bike!\nWear Helmet & No Alcohol Required");
    }
}

// ----------------------
// LOGIN SYSTEM
// ----------------------
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("✅ Login Successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login ❌";
    }
}

// ----------------------
// LOGOUT
// ----------------------
function logout() {
    alert("Logged Out 👋");
    window.location.href = "login.html";
}
