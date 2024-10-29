document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".navbar-shrtct");

	function removeActiveClasses() {
		navLinks.forEach((link) => link.classList.remove("active"));
	}

	function setActiveLink() {
		let index = sections.length;

		while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
		removeActiveClasses();
		navLinks[index].classList.add("active");
	}

	setActiveLink();
	window.addEventListener("scroll", setActiveLink);
});
