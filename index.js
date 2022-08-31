const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerOpen = document.querySelector(".hamburger__open");
const hamburgerClose = document.querySelector(".hamburger__close");
const navLink = document.querySelector(".navlink");
const title = document.querySelector(".hero-title");

hamburger.addEventListener("click", () => {
 hamburgerClose.classList.toggle("active");
 hamburgerOpen.classList.toggle("none");
 mobileMenu.classList.toggle("active");
 navLink.classList.toggle("active");
 title.classList.toggle("none");
 
});


