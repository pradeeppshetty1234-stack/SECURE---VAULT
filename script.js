// Select container
const container = document.querySelector(".container");

// Select buttons
const registerBtn = document.querySelector(".register-link");
const loginBtn = document.querySelector(".login-link");

// Open Signup
registerBtn.onclick = function (e) {
    e.preventDefault();
    container.classList.add("active");
};

// Open Login
loginBtn.onclick = function (e) {
    e.preventDefault();
    container.classList.remove("active");
};

// ---------- LOGIN PASSWORD ----------

const loginPassword = document.getElementById("loginPassword");
const toggleLoginPassword = document.getElementById("toggleLoginPassword");

toggleLoginPassword.onclick = function () {

    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        toggleLoginPassword.className = "fa-solid fa-eye-slash";
    } else {
        loginPassword.type = "password";
        toggleLoginPassword.className = "fa-solid fa-eye";
    }

};

// ---------- SIGNUP PASSWORD ----------

const signupPassword = document.getElementById("signupPassword");
const toggleSignupPassword = document.getElementById("toggleSignupPassword");

toggleSignupPassword.onclick = function () {

    if (signupPassword.type === "password") {
        signupPassword.type = "text";
        toggleSignupPassword.className = "fa-solid fa-eye-slash";
    } else {
        signupPassword.type = "password";
        toggleSignupPassword.className = "fa-solid fa-eye";
    }

};