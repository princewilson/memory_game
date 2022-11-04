const back_images = document.querySelectorAll(".back");
back_images.forEach((back_image) => {
    back_image.addEventListener("click", () => {
        back_image.classList.add("rotate");
        back_image.parentElement.classList.add("rotate");
    })
});

window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.style.order = Math.floor(Math.random() * 16);;
    });
});