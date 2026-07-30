const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}
// ===============================
// Elements
// ===============================

const modal = document.getElementById("branchModal");
const addBranchBtn = document.querySelector(".add-branch-btn");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.querySelector(".cancel-btn");
const branchForm = document.getElementById("branchForm");


// ===============================
// Open Modal
// ===============================

addBranchBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});


// ===============================
// Close Modal
// ===============================

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// ===============================
// Create Branch
// ===============================

branchForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Branch created successfully!");

    modal.style.display="none";

    branchForm.reset();

});


// ===============================
// Edit Branch
// ===============================

document.querySelectorAll(".edit-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("Edit Branch feature will be connected with MySQL.");

    });

});


// ===============================
// Delete Branch
// ===============================

document.querySelectorAll(".delete-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(confirm("Delete this branch?")){

            alert("Branch deleted.");

        }

    });

});


// ===============================
// Search Branch
// ===============================

const searchInput=document.querySelector(".search-box input");

searchInput.addEventListener("keyup",()=>{

    const value=searchInput.value.toLowerCase();

    const rows=document.querySelectorAll("tbody tr");

    rows.forEach(row=>{

        row.style.display=row.innerText.toLowerCase().includes(value)
        ? ""
        : "none";

    });

});


// ===============================
// Switch Branch
// ===============================

const branchSelect = document.getElementById("branchSelect");

// Load previously selected branch
const savedBranch = localStorage.getItem("currentBranch");

if(savedBranch){

    branchSelect.value = savedBranch;

}

// Save when changed
branchSelect.addEventListener("change",function(){

    localStorage.setItem("currentBranch",this.value);

    alert("Current Branch changed to " + this.value);

    // Flask will later reload data for this branch

});
// ===============================
// Notification
// ===============================

const bell=document.querySelector(".notification");

bell.addEventListener("click",()=>{

    alert("No new notifications.");

});


// ===============================
// Profile
// ===============================

const profile=document.querySelector(".profile");

profile.addEventListener("click",()=>{

    alert("Profile page coming soon.");

});


// ===============================
// Logout
// ===============================

const logout=document.querySelector(".logout");

logout.addEventListener("click",()=>{

    if(confirm("Logout from Secure Vault?")){

        window.location.href="index.html";

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