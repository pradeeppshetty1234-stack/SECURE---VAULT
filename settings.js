// ===============================
// APPLY SAVED THEME
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
} else {
    document.body.classList.remove("light-mode");
}

// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Settings Page Loaded");

    initializeNotifications();
    initializeProfile();
    initializeSearch();
    initializeSaveButtons();
    initializeDarkMode();

});

// ===============================
// NOTIFICATIONS
// ===============================

function initializeNotifications() {

    const bell = document.querySelector(".notification");

    if (!bell) return;

    bell.addEventListener("click", () => {

        alert("No new notifications.");

    });

}

// ===============================
// PROFILE
// ===============================

function initializeProfile() {

    const profile = document.querySelector(".profile");

    if (!profile) return;

    profile.addEventListener("click", () => {

        alert("Profile page coming soon.");

    });

}

// ===============================
// SEARCH
// ===============================

function initializeSearch() {

    const search = document.querySelector(".search-box input");

    if (!search) return;

    search.addEventListener("keyup", () => {

        console.log("Searching:", search.value);

    });

}

// ===============================
// SAVE BUTTONS
// ===============================

function initializeSaveButtons() {

    const buttons = document.querySelectorAll(".save-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            alert("Settings saved successfully.");

        });

    });

}

// ===============================
// CHANGE PROFILE PHOTO
// ===============================

const photoButton = document.querySelector(".profile-picture button");

if (photoButton) {

    photoButton.addEventListener("click", () => {

        alert("Profile photo upload will be available after backend integration.");

    });

}

// ===============================
// DARK MODE
// ===============================

function initializeDarkMode() {

    const darkMode = document.getElementById("darkModeToggle");

    if (!darkMode) return;

    // Set current switch state
    darkMode.checked = !document.body.classList.contains("light-mode");

    darkMode.addEventListener("change", function () {

        if (this.checked) {

            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");

        } else {

            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light");

        }

    });

}

// ===============================
// OTHER TOGGLES
// ===============================

const toggles = document.querySelectorAll(".switch input");

toggles.forEach(toggle => {

    if (toggle.id === "darkModeToggle") return;

    toggle.addEventListener("change", function () {

        if (this.checked) {

            alert("Setting Enabled.");

        } else {

            alert("Setting Disabled.");

        }

    });

});

// ===============================
// BACKUP & EXPORT
// ===============================

const toolButtons = document.querySelectorAll(".tool-btn");

toolButtons.forEach(button => {

    button.addEventListener("click", () => {

        const action = button.innerText.trim();

        alert(action + " feature will be available after backend integration.");

    });

});

// ===============================
// UPGRADE STORAGE
// ===============================

const upgrade = document.querySelector(".upgrade-btn");

if (upgrade) {

    upgrade.addEventListener("click", () => {

        alert("Storage plans will be available soon.");

    });

}

// ===============================
// DANGER ZONE
// ===============================

const dangerButtons = document.querySelectorAll(".danger-btn");

dangerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const action = button.innerText.trim();

        if (confirm("Are you sure you want to " + action + "?")) {

            alert(action + " completed successfully.");

        }

    });

});

// ===============================
// LOGOUT
// ===============================

const logout = document.querySelector(".logout");

if (logout) {

    logout.addEventListener("click", () => {

        if (confirm("Do you want to logout?")) {

            window.location.href = "index.html";

        }

    });

}

// ===============================
// PAGE READY
// ===============================

console.log("Secure Approval Vault - Settings Ready");
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