var counter = 0;
var card1;
var card2;

const back_images = document.querySelectorAll(".back");
back_images.forEach((back_image) => {
    back_image.addEventListener("click", () => {
        counter += 1;
        back_image.classList.add("rotate");
        back_image.parentElement.classList.add("rotate");
        if (counter === 1) {
            card1 = back_image.parentElement.firstElementChild;
        }
        if (counter === 2) {
            card2 = back_image.parentElement.firstElementChild;
            if (card1.alt === card2.alt) {

            } else {
                setTimeout(() => {
                    card1.parentElement.classList.remove("rotate");
                    card1.parentElement.lastElementChild.classList.remove("rotate");
                    card2.parentElement.classList.remove("rotate");
                    card2.parentElement.lastElementChild.classList.remove("rotate");
                }, 1000);
            }
            counter = 0;
        }
    })
});

window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.style.order = Math.floor(Math.random() * 16);;
    });
});