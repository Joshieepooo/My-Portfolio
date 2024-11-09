function toggleHeader() {
	const header = document.querySelector(".navbar");
	const burgerSpan = document.querySelector("#menu-button span");
	const navbarMenu = document.querySelector(".navbar-menu");

	burgerSpan.classList.toggle("is-closed");
	header.classList.toggle("active-header");
	navbarMenu.classList.toggle("navbar-menu--active");
}

document.querySelectorAll(".navbar-menu-shrtct a").forEach((item) => {
	item.addEventListener("click", () => {
		const burgerSpan = document.querySelector("#menu-button span");
		const header = document.querySelector(".navbar");
		const navbarMenu = document.querySelector(".navbar-menu");

		burgerSpan.classList.remove("is-closed");
		header.classList.remove("active-header");
		navbarMenu.classList.remove("navbar-menu--active");
	});
});

window.addEventListener("resize", () => {
	const header = document.querySelector(".navbar");
	const burgerSpan = document.querySelector("#menu-button span");
	const navbarMenu = document.querySelector(".navbar-menu");

	if (window.innerWidth > 600) {
		header.classList.remove("active-header");
		burgerSpan.classList.remove("is-closed");
		navbarMenu.classList.remove("navbar-menu--active");
	}
});

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
	for (let i = 0, len = revealElements.length; i < len; i++) {
		if (
			revealElements[i].getBoundingClientRect().top <
			window.innerHeight / 1.1
		) {
			revealElements[i].classList.add("revealed");
		}
	}
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const addEventOnElements = function (elements, eventType, callback) {
	for (let i = 0, len = elements.length; i < len; i++) {
		elements[i].addEventListener(eventType, callback);
	}
};

const skills = document.querySelectorAll(".skills-set");

skills.forEach((skill) => {
	skill.style.background = `var(--theme4)`;
});

skills.forEach((skill) => {
	skill.addEventListener("mouseenter", () => {
		skills.forEach((s) => {
			s.classList.remove("active");
			s.style.background = `rgba(69, 162, 158, 0.3)`;
			s.style.color = `rgba(0, 0, 0, 0.3)`;
		});

		skill.classList.add("active");
		skill.style.background = `var(--theme)`;
		skill.style.color = `var(--ivory)`;
	});

	skill.addEventListener("mouseleave", () => {
		skill.classList.remove("active");
		skills.forEach((s) => {
			s.style.background = `var(--theme4)`;
			s.style.color = `var(--textnBG-color)`;
		});
	});
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
	loader.classList.add("fade-out");

	setTimeout(function () {
		loader.style.display = "none";
	}, 1200);
});
