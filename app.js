"use strict";

// navegation__button main menu
const btnNavegation = document.querySelector(".navegation__button");
const mainMenu = document.querySelector(".info");

// Submenu
const btnUnfold = document.querySelectorAll(".info__unfold");
const arrowRed = document.querySelectorAll(".info__arrow");
const subMenu = document.querySelectorAll(".info__links");

// Functions
const upArrow = function (arrow) {
  arrow.classList.toggle("info__arrow--up");
};

const btnSelected = function (btn) {
  btn.classList.toggle("info__unfold--down");
};

const displayMenu = function (menu) {
  menu.classList.toggle("info__links--active");
};

const switchIconMenu = function (img) {
  // console.log(img.getAttribute("src"));
  img.src =
    img.getAttribute("src") === "build/images/icon-hamburger.svg"
      ? "build/images/icon-close.svg"
      : "build/images/icon-hamburger.svg";

  return img;
};

// Add event listeners
// Main menu
btnNavegation.addEventListener("click", function (e) {
  mainMenu.classList.toggle("info__active");
  switchIconMenu(e.target);
});

// Submenus
btnUnfold.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let button = e.target.classList.contains("info__arrow")
      ? e.target.closest(".info__unfold")
      : e.target;

    // console.log(button.children);

    // console.log("Arrow", e.target.closest(".info__unfold"));
    upArrow(button.children[0]);

    // console.log(e.target.closest(".info__unfold"));
    btnSelected(button);

    // console.log(e.target.closest(".info__unfold").nextElementSibling);
    displayMenu(button.nextElementSibling);
  });
});
