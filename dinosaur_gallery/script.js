// script.js

var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 5; i++) {
    var thumb = document.createElement("img");
    thumb.src = "/images/dinosaur" + i + ".jpg";
    thumb.alt = "dinosaur " + i;
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);
    thumb.addEventListener("click", function () { currentImage.src = this.src; });
}
