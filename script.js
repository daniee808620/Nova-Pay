function saveUserData(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get user input values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let referredBy = document.getElementById("referred_by").value;
    let password = document.getElementById("password").value;

    // Save data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("referredBy", referredBy);
    localStorage.setItem("password", password);

    // Redirect to login.html
    window.location.href = "login.html";
}
