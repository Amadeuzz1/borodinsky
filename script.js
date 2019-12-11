let link = document.querySelector(".login-button");
let popapLogin = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");
let closeMap = document.querySelector(".modal-map .modal-close");
let popapMap = document.querySelector(".footer-contacts a");
let mapImg = document.querySelector(".modal-map");
let login = popapLogin.querySelector(".login-icon-user");
let pass = popapLogin.querySelector(".login-icon-pass");
let form = popapLogin.querySelector(".login-form");
let storage = localStorage.getItem("login");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popapLogin.classList.add("modal-show");
	if(storage) {
		login.value = storage;
		pass.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popapLogin.classList.remove("modal-show");
	popapLogin.classList.remove("modal-error");
});

popapMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapImg.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapImg.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
	if(login.value.length < 4) {
		evt.preventDefault();
		popapLogin.classList.remove("modal-error");
		popapLogin.offsetWidth = popapLogin.offsetWidth;
		popapLogin.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		if(mapImg.classList.contains("modal-show")) {
			mapImg.classList.remove("modal-show");
		}
		if(popapLogin.classList.contains("modal-show")) {
			popapLogin.classList.remove("modal-show");
			popapLogin.classList.remove("modal-error");
		}
	}
});