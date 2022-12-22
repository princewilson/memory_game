var counter = 0;
var card1;
var card2;
var firstClick = 0;
var pairCounts = 0;
var startTime;
var endTime;
document.getElementById("hiddenDiv").hidden = true;

const back_images = document.querySelectorAll(".back");
back_images.forEach((back_image) => {
    back_image.addEventListener("click", () => {
        if(firstClick === 0) {
            startTime = Date.now();
            firstClick = 1;
        }
        counter += 1;
        back_image.classList.add("rotate");
        back_image.parentElement.classList.add("rotate");
        if (counter === 1) {
            card1 = back_image.parentElement.firstElementChild;
        }
        if (counter === 2) {
            card2 = back_image.parentElement.firstElementChild;
            if (card1.alt === card2.alt) {
                pairCounts += 1;
                if(pairCounts === 8) {
                    var div = document.getElementById("hiddenDiv");
                    endTime = Date.now();
                    div.innerHTML = `Yay, Congrats🥳! You've completed the game in ${(endTime - startTime) / 1000} seconds!`;
                    div.hidden = false;
                }
            } else {
                setTimeout(() => {
                    card1.parentElement.classList.remove("rotate");
                    card1.parentElement.lastElementChild.classList.remove("rotate");
                    card2.parentElement.classList.remove("rotate");
                    card2.parentElement.lastElementChild.classList.remove("rotate");
                }, 500);
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

const header = document.querySelector("header");
const navLinks = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".collapse");

toggleButton.addEventListener("click", () => {
    header.classList.toggle("active");
    navLinks.classList.toggle("active");
})