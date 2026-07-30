const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}
// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Security Center Loaded");

    initializeSidebar();
    initializeNotifications();
    initializeSearch();
    initializePasswordStrength();
    initializeUpdatePassword();

});

// ===============================
// SIDEBAR
// ===============================

function initializeSidebar() {

    const items = document.querySelectorAll(".sidebar li");

    items.forEach(item => {

        item.addEventListener("click", () => {

            items.forEach(i => i.classList.remove("active"));

            if (!item.classList.contains("logout")) {
                item.classList.add("active");
            }

        });

    });

}

// ===============================
// NOTIFICATIONS
// ===============================

function initializeNotifications() {

    const bell = document.querySelector(".notification");

    if (!bell) return;

    bell.addEventListener("click", () => {

        alert("No new security alerts.");

    });

}

// ===============================
// PROFILE
// ===============================

const profile = document.querySelector(".profile");

if(profile){

    profile.addEventListener("click",()=>{

        alert("Profile page coming soon.");

    });

}

// ===============================
// SEARCH
// ===============================

function initializeSearch(){

    const search=document.querySelector(".search-box input");

    if(!search) return;

    search.addEventListener("keyup",()=>{

        console.log("Searching:",search.value);

    });

}

// ===============================
// PASSWORD STRENGTH
// ===============================

function initializePasswordStrength(){

    const password=document.querySelectorAll(".password-form input")[1];

    const fill=document.querySelector(".strength-fill");

    const text=document.getElementById("strengthText");

    if(!password) return;

    password.addEventListener("input",()=>{

        const value=password.value;

        let strength=0;

        if(value.length>=8) strength++;

        if(/[A-Z]/.test(value)) strength++;

        if(/[0-9]/.test(value)) strength++;

        if(/[!@#$%^&*]/.test(value)) strength++;

        switch(strength){

            case 1:

                fill.style.width="25%";
                fill.style.background="#dc3545";
                text.innerHTML="Weak";
                text.style.color="#dc3545";
                break;

            case 2:

                fill.style.width="50%";
                fill.style.background="#fd7e14";
                text.innerHTML="Medium";
                text.style.color="#fd7e14";
                break;

            case 3:

                fill.style.width="75%";
                fill.style.background="#ffc107";
                text.innerHTML="Good";
                text.style.color="#ffc107";
                break;

            case 4:

                fill.style.width="100%";
                fill.style.background="#00c853";
                text.innerHTML="Strong";
                text.style.color="#00c853";
                break;

            default:

                fill.style.width="0%";
                text.innerHTML="None";
                text.style.color="#999";

        }

    });

}

// ===============================
// UPDATE PASSWORD
// ===============================

function initializeUpdatePassword(){

    const button=document.querySelector(".update-btn");

    if(!button) return;

    button.addEventListener("click",()=>{

        const current=document.querySelectorAll(".password-form input")[0].value;

        const password=document.querySelectorAll(".password-form input")[1].value;

        const confirm=document.querySelectorAll(".password-form input")[2].value;

        if(current===""){

            alert("Enter current password.");

            return;

        }

        if(password.length<8){

            alert("Password must be at least 8 characters.");

            return;

        }

        if(password!==confirm){

            alert("Passwords do not match.");

            return;

        }

        alert("Password updated successfully.");

    });

}
// ===============================
// TWO FACTOR AUTHENTICATION
// ===============================

const toggles = document.querySelectorAll(".switch input");

toggles.forEach(toggle => {

    toggle.addEventListener("change", () => {

        if (toggle.checked) {

            alert("Security option enabled.");

        } else {

            alert("Security option disabled.");

        }

    });

});

// ===============================
// REMOVE DEVICE
// ===============================

const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(confirm("Remove this trusted device?")){

            button.closest(".device").remove();

        }

    });

});

// ===============================
// LOGOUT SESSION
// ===============================

const logoutSessionButtons = document.querySelectorAll(".logout-session");

logoutSessionButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(confirm("Logout this session?")){

            button.closest(".session").remove();

        }

    });

});

// ===============================
// LOGOUT ALL SESSIONS
// ===============================

const logoutAll=document.querySelector(".logout-all");

if(logoutAll){

    logoutAll.addEventListener("click",()=>{

        if(confirm("Logout from all other devices?")){

            alert("All other sessions have been logged out.");

        }

    });

}

// ===============================
// PANIC LOCK
// ===============================

const panic=document.querySelector(".panic-btn");

if(panic){

    panic.addEventListener("click",()=>{

        const result=confirm(
            "Activate Panic Lock?\n\nThis will:\n\n• Logout all devices\n• Lock your vault\n• Require login again"
        );

        if(result){

            alert("Panic Lock Activated Successfully.");

            // Future Backend:
            // window.location.href="login.html";

        }

    });

}

// ===============================
// ADVANCED SECURITY TOOLS
// ===============================

const toolButtons=document.querySelectorAll(".tools button");

toolButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const text=button.innerText.trim();

        alert(text+" feature will be available after backend integration.");

    });

});

// ===============================
// LOGOUT
// ===============================

const logout=document.querySelector(".logout");

if(logout){

    logout.addEventListener("click",()=>{

        if(confirm("Do you want to logout?")){

            window.location.href="index.html";

        }

    });

}

// ===============================
// PAGE READY
// ===============================

console.log("Secure Approval Vault - Security Center Ready");


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        sidebar.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {

        if (
            window.innerWidth <= 768 &&
            !sidebar.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            sidebar.classList.remove("active");
        }

    });

}