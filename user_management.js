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

    initializeModal();
    initializeSearch();
    initializeNotifications();
    initializeProfile();
    initializeLogout();
    initializeActions();

});

// ===============================
// ADD USER MODAL
// ===============================

function initializeModal() {

    const modal = document.getElementById("addUserModal");
    const openBtn = document.querySelector(".add-user-btn");
    const closeBtn = document.querySelector(".close");
    const cancelBtn = document.querySelector(".cancel-btn");

    if(openBtn){

        openBtn.onclick = () => {
            modal.style.display = "flex";
        };

    }

    if(closeBtn){

        closeBtn.onclick = () => {
            modal.style.display = "none";
        };

    }

    if(cancelBtn){

        cancelBtn.onclick = () => {
            modal.style.display = "none";
        };

    }

    window.onclick = function(e){

        if(e.target === modal){

            modal.style.display = "none";

        }

    };

}

// ===============================
// SEARCH
// ===============================

function initializeSearch(){

    const search = document.querySelector(".search-box input");

    if(!search) return;

    search.addEventListener("keyup",function(){

        console.log("Searching :",this.value);

    });

}

// ===============================
// EDIT & DELETE
// ===============================

function initializeActions(){

    const editBtns=document.querySelectorAll(".edit");
    const deleteBtns=document.querySelectorAll(".delete");

    editBtns.forEach(btn=>{

        btn.addEventListener("click",()=>{

            alert("Edit User feature will be available after backend integration.");

        });

    });

    deleteBtns.forEach(btn=>{

        btn.addEventListener("click",()=>{

            if(confirm("Delete this user?")){

                alert("User deleted successfully.");

            }

        });

    });

}

// ===============================
// CREATE USER
// ===============================

const form=document.getElementById("addUserForm");

if(form){

    form.addEventListener("submit",function(e){

        e.preventDefault();

        alert("User created successfully.");

        document.getElementById("addUserModal").style.display="none";

        form.reset();

    });

}

// ===============================
// NOTIFICATIONS
// ===============================

function initializeNotifications(){

    const bell=document.querySelector(".notification");

    if(!bell) return;

    bell.addEventListener("click",()=>{

        alert("No new notifications.");

    });

}

// ===============================
// PROFILE
// ===============================

function initializeProfile(){

    const profile=document.querySelector(".profile");

    if(!profile) return;

    profile.addEventListener("click",()=>{

        alert("Profile page coming soon.");

    });

}

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

console.log("User Management Ready");   
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