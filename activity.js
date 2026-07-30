const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}
// ================= LOGOUT =================

const logout = document.querySelector(".logout");

if (logout) {
    logout.addEventListener("click", function () {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (!confirmLogout) {
            return;
        }

        // Remove stored login data (if you use localStorage/sessionStorage)
        localStorage.clear();
        sessionStorage.clear();

        // Redirect immediately
        window.location.replace("index.html");

    });
}
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