const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerOpen = document.querySelector(".hamburger__open");
const hamburgerClose = document.querySelector(".hamburger__close");
const navLink = document.querySelector(".navlink")

hamburger.addEventListener("click", () => {
 hamburgerClose.classList.toggle("active");
 hamburgerOpen.classList.toggle("none");
 mobileMenu.classList.toggle("active");
 navLink.classList.toggle("active");
 
});


// hamburgerClose.addEventListener("click", () => {
//     // hamburgerClose.classList.toggle("none");
//     hamburgerOpen.classList.toggle("active");
//     mobileMenu.classList.toggle("none");
//     navLink.classList.toggle("none");
    
//    });
