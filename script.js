// Check if user is already signed up and redirect to dashboard
window.onload = function() {
    let username = localStorage.getItem("username");

    if (username) {
        window.location.href = "dashboard.html";
    }
};

// Function to handle signup
function saveUserData(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let referredBy = document.getElementById("referred_by").value.trim();
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Store user data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("referred_by", referredBy);
    localStorage.setItem("password", password);

    // Redirect user to dashboard
    window.location.href = "dashboard.html";
}
