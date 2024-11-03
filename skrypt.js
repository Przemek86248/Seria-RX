 // feature about burger activ menu for mobile 
let collapsible = document.querySelectorAll(".collapsible");
let targetElement = document.querySelector("#target")

function toggleClass () {
    targetElement.classList.toggle("collapsible--expanded");
}

collapsible.forEach((item) => {
    item.addEventListener("click", toggleClass);
});

function handleResize() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        collapsible.forEach((item) => {
            item.removeEventListener("click", toggleClass);
        });
}}

window.addEventListener('resize', handleResize);
handleResize();
 // feature about slider on the main page 
const sliderimage = document.querySelector(".slider");
let numberOfPhoto = document.querySelectorAll(".slider img").length;
let buttomNext = document.querySelector(".sliderNavNext");
let buttomPrev = document.querySelector(".sliderNavPrev");
let currentIndex = 0;


function checkIndex() {
    if (currentIndex < 0) {
        currentIndex = numberOfPhoto - 1
    }
    if (currentIndex >= numberOfPhoto) {
        currentIndex = 0
    }
}  

buttomNext.addEventListener("click", function() {
    currentIndex++;
    checkIndex();
    sliderimage.style.transform = `translateX(-${currentIndex * 100}%)`;
});    


buttomPrev.addEventListener("click", function() {
    currentIndex--;
    checkIndex();
    sliderimage.style.transform = `translateX(-${currentIndex * 100}%)`;
});   

