document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user details from localStorage
    let userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails) {
        // Populate user details in profile.html
        document.getElementById('name').textContent = userDetails.name;
        document.getElementById('email').textContent = userDetails.email;
        document.getElementById('phone').textContent = userDetails.phone;
    } else {
        // Handle case where user details are not found
        alert("User details not found.");
    }
});
// logout
document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.querySelector(".logout");

    logoutLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default action of the link

        // Display thanks message
        alert("Thank you for using our service!");

        // Redirect to index.html
        window.location.href = "index.html";

        // Display a message in the console for the user to close the window
        console.log("You may close this window.");
    });
});
