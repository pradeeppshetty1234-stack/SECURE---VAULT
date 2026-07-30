const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}
// ================= PAGE ANIMATION =================

window.onload = () => {

    document.querySelector(".main").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".main").style.transition = "0.6s";
        document.querySelector(".main").style.opacity = "1";

    }, 100);

};

// ================= SIDEBAR ACTIVE =================

const menuItems = document.querySelectorAll(".sidebar ul li:not(.logout)");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => i.classList.remove("active"));

        this.classList.add("active");

    });

});

// ================= SEARCH =================

const searchInput = document.querySelector(".search-box input");

const rows = document.querySelectorAll(".approval-table tbody tr");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    rows.forEach(row => {

        let text = row.innerText.toLowerCase();

        row.style.display = text.includes(value) ? "" : "none";

    });

});

// ================= VIEW BUTTON =================

document.querySelectorAll(".view-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        alert("File details loaded successfully.");

    });

});

// ================= APPROVE =================

document.querySelectorAll(".approve-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        if (confirm("Approve this file?")) {

            let row = this.closest("tr");

            let status = row.querySelector(".status");

            status.innerHTML = "Approved";
            status.className = "status approved";

            alert("File Approved Successfully");

        }

    });

});

// ================= REJECT =================

document.querySelectorAll(".reject-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        if (confirm("Reject this file?")) {

            let row = this.closest("tr");

            let status = row.querySelector(".status");

            status.innerHTML = "Rejected";
            status.className = "status rejected";

            alert("File Rejected");

        }

    });

});

// ================= FILTER =================

const filters = document.querySelectorAll(".filters select");

filters[0].addEventListener("change", () => {

    let value = filters[0].value;

    rows.forEach(row => {

        let status = row.querySelector(".status").innerText;

        if (value === "All Requests") {

            row.style.display = "";

        } else {

            row.style.display = (status === value) ? "" : "none";

        }

    });

});

// ================= NOTIFICATION =================

const bell = document.querySelector(".notification");

bell.addEventListener("click", function () {

    alert("You have pending approval requests.");

});

// ================= LOGOUT =================

const logout = document.querySelector(".logout");

logout.addEventListener("click", function (e) {

    e.stopPropagation();

    if (confirm("Are you sure you want to logout?")) {

        window.location.href = "index.html"; // Change to logn.html if your login page has that name

    }

});
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