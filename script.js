// script.js

// For the Message and Email submit forms
let submitButton = document.querySelector('#submit-button');
function emailValidate(email) {
	return email.includes('@');
}

function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if(emailValidate(emailText) !== true) {
		console.log('The email address must contain @');
		return false;
	}
	console.log('Thanks for your message');
}

submitButton.addEventListener('click', clickListener);

// For the Tabbed Trucking Gallery
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

// For the Dinosaur Image Gallery
var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 5; i++) {
  var thumb = document.createElement("img");
  thumb.src = "/images/dinosaur" + i + ".jpg";
  thumb.alt = "dinosaur " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
}
