// ? -- Navbar Menu Settings -- ? //
//
// * -- Navbar Menu Visibility Start -- * //

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

// * -- Navbar Menu Visibility End -- * //
//
//
//
//
//
// ? -- Scroll Reveal Settings -- ? //
//
// * -- Scroll Reveal Start -- * //

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.22
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

// * -- Scroll Reveal End -- * //
