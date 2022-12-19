const header = document.querySelector("header");
const navLinks = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".collapse");

toggleButton.addEventListener("click", () => {
    header.classList.toggle("active");
    navLinks.classList.toggle("active");
})