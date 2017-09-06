var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var close = document.querySelector(".modal-content-close");
var username = popup.querySelector("[name=username]");
var useremail = popup.querySelector("[name=useremail]");
var message = popup.querySelector("[name=text]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	username.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});	

form.addEventListener("submit", function(event) {
	if (!useremail.value || !message.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});


