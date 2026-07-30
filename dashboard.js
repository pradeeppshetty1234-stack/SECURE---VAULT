const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}
/*==================================
        PAGE LOAD
==================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/*==================================
        SIDEBAR ACTIVE
==================================*/

const menuItems = document.querySelectorAll(".sidebar ul li:not(.logout)");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


/*==================================
        SEARCH FILES
==================================*/

const searchInput = document.querySelector(".search-box input");

const tableRows = document.querySelectorAll("table tbody tr");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        tableRows.forEach(row => {

            const text = row.innerText.toLowerCase();

            row.style.display = text.includes(value) ? "" : "none";

        });

    });

}


/*==================================
        COUNTER ANIMATION
==================================*/

const counters = document.querySelectorAll(".card-info h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const timer = setInterval(() => {

        count++;

        counter.innerText = count;

        if (count >= target) {

            clearInterval(timer);

        }

    }, 8);

});


/*==================================
        TABLE BUTTONS
==================================*/

const tableButtons = document.querySelectorAll(".table-btn");

tableButtons.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.innerHTML;

        button.innerHTML = "Opening...";

        button.disabled = true;

        setTimeout(() => {

            button.innerHTML = text;

            button.disabled = false;

        }, 800);

    });

});


/*==================================
        PROFILE
==================================*/

const profile = document.querySelector(".profile");

if (profile) {

    profile.addEventListener("click", () => {

        alert("Profile page coming soon!");

    });

}
/*==================================
        NOTIFICATION
==================================*/

const notification = document.querySelector(".notification");

if (notification) {

    notification.addEventListener("click", () => {

        alert("You have 3 new notifications.");

    });

}


/*==================================
        QUICK ACTION CARDS
==================================*/

const actionCards = document.querySelectorAll(".action-card");

actionCards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.97)";

        setTimeout(() => {

            card.style.transform = "";

        }, 150);

    });

});


/*==================================
        APPROVE BUTTON
==================================*/

const approveButtons = document.querySelectorAll(".approve-btn");

approveButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "Approved ✓";

        button.disabled = true;

        button.style.background = "#16a34a";

    });

});


/*==================================
        REJECT BUTTON
==================================*/

const rejectButtons = document.querySelectorAll(".reject-btn");

rejectButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "Rejected";

        button.disabled = true;

        button.style.background = "#dc2626";

    });

});


/*==================================
        SECURITY STATUS
==================================*/

const securityBox = document.querySelector(".security-box");

if (securityBox) {

    securityBox.addEventListener("click", () => {

        alert("AES-256 Encryption is active.\nYour vault is protected.");

    });

}


/*==================================
        RECENT ACTIVITY
==================================*/

const activityItems = document.querySelectorAll(".activity-list li");

activityItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.background = "rgba(0,191,255,0.08)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.background = "transparent";

    });

});
/*==================================
        UPLOAD BUTTON
==================================*/

const uploadBtn = document.querySelector(".uploadBtn");

if (uploadBtn) {

    uploadBtn.addEventListener("click", () => {

        window.location.href = "upload.html";

    });

}


/*==================================
        LOGOUT
==================================*/

const logout = document.querySelector(".logout");

if (logout) {

    logout.addEventListener("click", () => {

        if (confirm("Do you want to logout?")) {

            // Stop any running animations
            document.body.style.transition = "none";

            // Clear storage (optional)
            localStorage.clear();
            sessionStorage.clear();

            // Instant redirect
            window.location.href = "index.html";

        }

    });

}


/*==================================
        WELCOME ANIMATION
==================================*/

const welcome = document.querySelector(".welcome");

if (welcome) {

    welcome.style.opacity = "0";
    welcome.style.transform = "translateY(20px)";

    setTimeout(() => {

        welcome.style.transition = ".5s ease";

        welcome.style.opacity = "1";

        welcome.style.transform = "translateY(0)";

    }, 100);

}


/*==================================
        PAGE READY
==================================*/

window.addEventListener("load", () => {

    console.log("Dashboard Loaded Successfully");

});


/*==================================
        PERFORMANCE OPTIMIZATION
==================================*/

// Disable right-click (optional)
document.addEventListener("contextmenu", e => e.preventDefault());

// Prevent image dragging
document.querySelectorAll("img").forEach(img => {
    img.draggable = false;
});

// Smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";
// ===============================


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