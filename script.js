function saveUserData(event) {
    event.preventDefault(); // Prevent form refresh

    // Get input values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    // Save user data to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);

    // Show success message
    let messageBox = document.createElement("div");
    messageBox.innerHTML = "Registration successful! <br> Login to your dashboard now...";
    messageBox.style.color = "green";
    messageBox.style.backgroundColor = "white";
    messageBox.style.padding = "10px";
    messageBox.style.border = "1px solid green";
    messageBox.style.borderRadius = "5px";
    messageBox.style.marginTop = "10px";
    messageBox.style.fontSize = "14px";
    messageBox.style.textAlign = "center";
    
    // Insert message box after the form
    let form = document.querySelector("form");
    form.parentNode.insertBefore(messageBox, form.nextSibling);

    // Redirect to login page after 3 seconds
    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000);
}

function loginUser(event) {
    event.preventDefault(); // Prevent form refresh

    // Get input values
    let usernameOrEmail = document.getElementById("usernameOrEmail").value;
    let password = document.getElementById("password").value;

    // Get stored user data
    let storedUsername = localStorage.getItem("username");
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    // Validate login
    if ((usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to user dashboard
    } else {
        alert("Invalid credentials! Please try again.");
    }
}
