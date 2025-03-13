function loginUser(event) {
    event.preventDefault(); // Prevent form refresh

    // Get input values
    let usernameOrEmail = document.getElementById("usernameOrEmail").value;
    let phone = document.getElementById("phone").value;

    // Get stored user data
    let storedUsername = localStorage.getItem("username");
    let storedEmail = localStorage.getItem("email");
    let storedPhone = localStorage.getItem("phone");

    // Validate login
    if ((usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) && phone === storedPhone) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to user dashboard
    } else {
        alert("Invalid credentials! Please try again.");
    }
}
