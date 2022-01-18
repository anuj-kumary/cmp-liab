
const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector(".sidebar")
const closeSidebar = document.querySelector(".close-sidebar")

hamburger.addEventListener('click', ()=>{
    sidebar.classList.toggle("show-sidebar")
})