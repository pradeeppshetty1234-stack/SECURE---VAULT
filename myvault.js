const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}
/*==================================
        PAGE ANIMATION
==================================*/

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = ".6s";

    document.body.style.opacity = "1";

});


/*==================================
        SIDEBAR ACTIVE MENU
==================================*/

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


/*==================================
        SEARCH FILES
==================================*/

const search = document.querySelector(".search-box input");

const rows = document.querySelectorAll(".vault-table tbody tr");

search.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    rows.forEach(row=>{

        const text = row.innerText.toLowerCase();

        row.style.display = text.includes(value) ? "" : "none";

    });

});


/*==================================
        VIEW BUTTON
==================================*/

document.querySelectorAll(".view-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        alert("File preview will be available after connecting Flask.");

    });

});


/*==================================
        DOWNLOAD BUTTON
==================================*/

document.querySelectorAll(".download-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        const original = button.innerHTML;

        button.innerHTML = '<i class="fa-solid fa-check"></i>';

        setTimeout(()=>{

            button.innerHTML = original;

        },1200);

    });

});


/*==================================
        DELETE BUTTON
==================================*/

document.querySelectorAll(".delete-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        const row = button.closest("tr");

        const confirmDelete = confirm("Delete this file?");

        if(confirmDelete){

            row.remove();

        }

    });

});


/*==================================
        FILTERS
==================================*/

const filters = document.querySelectorAll(".filters select");

filters.forEach(filter=>{

    filter.addEventListener("change",()=>{

        console.log("Filter:",filter.value);

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

logout.addEventListener("click",()=>{

    if(confirm("Do you want to logout?")){

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