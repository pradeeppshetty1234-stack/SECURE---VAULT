const theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}/*==================================
        PAGE LOAD ANIMATION
==================================*/

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = ".5s";

    document.body.style.opacity = "1";

});


/*==================================
        SIDEBAR ACTIVE
==================================*/

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});


/*==================================
        FILE INPUT
==================================*/

const browseBtn = document.getElementById("browseBtn");

const fileInput = document.getElementById("fileInput");

const preview = document.querySelector(".file-preview");

browseBtn.onclick = () => {

    fileInput.click();

};

fileInput.addEventListener("change",()=>{

    if(fileInput.files.length>0){

        const file=fileInput.files[0];

        preview.innerHTML=`

        <i class="fa-solid fa-file-circle-check"></i>

        <h3>${file.name}</h3>

        <p>${(file.size/1024).toFixed(2)} KB</p>

        `;

    }

});


/*==================================
        DRAG & DROP
==================================*/

const uploadBox=document.querySelector(".upload-box");

uploadBox.addEventListener("dragover",(e)=>{

    e.preventDefault();

    uploadBox.style.borderColor="#38bdf8";

});

uploadBox.addEventListener("dragleave",()=>{

    uploadBox.style.borderColor="#00bfff";

});

uploadBox.addEventListener("drop",(e)=>{

    e.preventDefault();

    uploadBox.style.borderColor="#00bfff";

    fileInput.files=e.dataTransfer.files;

    const file=fileInput.files[0];

    preview.innerHTML=`

    <i class="fa-solid fa-file-circle-check"></i>

    <h3>${file.name}</h3>

    <p>${(file.size/1024).toFixed(2)} KB</p>

    `;

});


/*==================================
        UPLOAD PROGRESS
==================================*/

const uploadBtn=document.querySelector(".encryptBtn");

const progress=document.getElementById("progressFill");

uploadBtn.addEventListener("click",()=>{

    let value=0;

    progress.style.width="0%";

    progress.innerHTML="0%";

    const upload=setInterval(()=>{

        value+=5;

        progress.style.width=value+"%";

        progress.innerHTML=value+"%";

        if(value>=100){

            clearInterval(upload);

            alert("File Encrypted & Uploaded Successfully!");

        }

    },100);

});


/*==================================
        REMOVE FILE
==================================*/

const removeBtn=document.querySelector(".removeBtn");

removeBtn.addEventListener("click",()=>{

    fileInput.value="";

    preview.innerHTML=`

    <i class="fa-solid fa-file-circle-plus"></i>

    <h3>No File Selected</h3>

    <p>Choose a file to see its details here.</p>

    `;

    progress.style.width="0%";

    progress.innerHTML="0%";

});


/*==================================
        LOGOUT
==================================*/

const logout=document.querySelector(".logout");

logout.addEventListener("click",()=>{

    if(confirm("Do you want to logout?")){

        window.location.href="index.html";

    }

});



const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    sidebar.classList.toggle("active");

    console.log("Has active:", sidebar.classList.contains("active"));
    console.log(sidebar.className);
});