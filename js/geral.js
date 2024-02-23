document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.querySelector(".car-thumbnails");
    const mainImage = document.querySelector(".main-image");

    thumbnailsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("thumbnail")) {
            const thumbnailSrc = event.target.getAttribute("src");
            mainImage.setAttribute("src", thumbnailSrc);
        }
    });
});
