document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("active");
        sidebar.classList.toggle("active");
    });
});