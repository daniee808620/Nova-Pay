window.onload = function() {
    let username = localStorage.getItem("username") || "User";
    let balance = localStorage.getItem("balance");
    let referrals = localStorage.getItem("referrals") || 0;
    let cashout = localStorage.getItem("cashout") || "0.00";

    if (balance === null) {
        balance = 50; // Give ₦50 bonus on first login
        localStorage.setItem("balance", balance);
    }

    document.getElementById("username").innerText = username;
    document.getElementById("balance").innerText = balance;
    document.getElementById("referrals").innerText = referrals;
    document.getElementById("cashout").innerText = cashout + " ₦";
}
