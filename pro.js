const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
// const navMenuHide = document.querySelector(".hide");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".menu-overlay");
const preloader = document.querySelector(".preloader");


hamburger.addEventListener("click", ()=>{
    console.log("Pressed");

    if(navMenu.classList.contains("active")){
        navMenu.classList.remove("active");
        hamburger.classList.remove("hide");
        closeMenu.classList.add("show");
        overlay.classList.remove("active");
    } else {
        navMenu.classList.add("active");
        hamburger.classList.add("hide");
        overlay.classList.add("active");
    }
});


closeMenu.addEventListener("click", ()=>{
    navMenu.classList.remove("active");
    hamburger.classList.remove("hide");
    closeMenu.classList.remove("show");
    overlay.classList.remove("active");
});
// navMenuHide.addEventListener('click', ()=>{
//      navMenu.classList.remove("active");
// })

const navbar = document.querySelector(".flex-container");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener("load", () => {
    preloader.classList.add("hide");
});

// Show preloader when going to another HTML page
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", (e) => {

        const href = link.getAttribute("href");

        // Ignore links that don't lead to another page
        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:")
        ) {
            return;
        }

        e.preventDefault();

        preloader.classList.remove("hide");

        setTimeout(() => {
            window.location.href = href;
        }, 600);

    });

});