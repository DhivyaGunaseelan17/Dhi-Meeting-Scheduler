document.addEventListener("DOMContentLoaded", function() {
    let signup = document.querySelector(".signup");
    let login = document.querySelector(".login");
    let slider = document.querySelector(".slider");
    let formSection = document.querySelector(".form-section");
    let signupButton = document.querySelector(".signup-box .clkbtn");
    let loginButton = document.querySelector(".login-box .clkbtn");

    signup.addEventListener("click", () => {
        // Redirect to signup form
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
    });

    function loginHandler() {
        // Check if the user is already signed up
        let userDetails = JSON.parse(localStorage.getItem('userDetails'));

        if (userDetails) {
            // User exists, show login form
            formSection.classList.remove("form-section-move");
        } else {
            // New user, indicate to create an account and redirect to signup page
            alert("You need to create an account first.");
            // Redirect to signup form
            slider.classList.add("moveslider");
            formSection.classList.add("form-section-move");
        }

        // Get form input values
        let email = document.querySelector(".email").value;
        let password = document.querySelector(".password").value;

        if (userDetails && userDetails.email === email && userDetails.password === password) {
            // Redirect to dashboard.html if the user is already signed up and credentials match
            window.location.href = "dashboard.html";
        } else {
            alert("Incorrect email or password.");
        }
    }

    // Add event listener for login button click
    loginButton.addEventListener("click", loginHandler);

    // Add event listener for login link click
    login.addEventListener("click", () => {
        // Show login form
        formSection.classList.remove("form-section-move");
    });

    signupButton.addEventListener("click", () => {
        // Get form input values
        let name = document.querySelector(".name").value;
        let email = document.querySelector(".signup-box .email").value;
        let phone = document.querySelector(".phone").value;
        let password = document.querySelector(".password").value;
        let confirmPassword = document.querySelectorAll(".password")[1].value;

        // Simple validation: Check if all fields are filled
        if (name && email && phone && password && confirmPassword) {
            // Save user details in local storage
            let userDetails = {
                name: name,
                email: email,
                phone: phone,
                password: password
            };
            localStorage.setItem('userDetails', JSON.stringify(userDetails));

            // Redirect to dashboard.html after signup
            window.location.href = "dashboard.html";
        } else {
            alert("Please fill in all the fields.");
        }
    });
});

