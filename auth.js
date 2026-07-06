// ==========================
// LOGIN FORM
// ==========================

const loginForm = document.querySelector(".login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        if (email === "" || password === "") {

            alert("Please fill all the fields.");

        } else {

            alert("Login Successful!");

        }

    });

}

// ==========================
// REGISTER FORM
// ==========================

const registerForm = document.querySelector(".register-form");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();
        const confirmPassword = document.querySelector("#confirm-password").value.trim();

        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill all the fields.");

        } else if (password !== confirmPassword) {

            alert("Passwords do not match.");

        } else {

            alert("Registration Successful!");

        }

    });

}