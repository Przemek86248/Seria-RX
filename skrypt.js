let collapsible = document.querySelectorAll(".collapsible");
let targetElement = document.querySelector("#target")

collapsible.forEach((item) => {
    item.addEventListener("click", function() {
        targetElement.classList.toggle("collapsible--expanded");
    });
});

const sliderimage = document.querySelector(".slider");
let numberOfPhoto = document.querySelectorAll(".slider_img").length;
let buttomNext = document.querySelector(".sliderNavNext");
let buttomPrev = document.querySelector(".sliderNavPrev");
let currentIndex = 0;

function checkIndex() {
    if (currentIndex < 0) {
        currentIndex = numberOfPhoto - 1;
    }
    if (currentIndex >= numberOfPhoto) {
        currentIndex = 0;
    }
}
buttomNext.addEventListener("click", function() {
    currentIndex++;
    sliderimage.style.transform = `translateX(-${currentIndex * 56}rem)`;
    checkIndex();
});    


buttomPrev.addEventListener("click", function() {
    currentIndex--;
    sliderimage.style.transform = `translateX(-${currentIndex * 56}rem)`;
    checkIndex();
});

