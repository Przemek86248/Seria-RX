let collapsible = document.querySelectorAll(".collapsible");
let targetElement = document.querySelector("#target")

collapsible.forEach((item) => {
    item.addEventListener("click", function() {
        targetElement.classList.toggle("collapsible--expanded");
    });
});