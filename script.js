const back_image = document.querySelector(".back");
back_image.addEventListener("click", () => {
    back_image.classList.add("rotate");
    document.querySelector(".card").classList.add("rotate");
});