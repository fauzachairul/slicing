const  menuBar = document.querySelector(".menu");
const menuNav = document.querySelector(".nav-links");

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active");
});


const navBar = document.querySelector(".navBar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scroling-active", windowPosition);
});
