//jshint esversion : 6
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

var modalNoButton = document.querySelector(".modal__action--negative");
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("mobile-nav__open");
  closeModal();
});

toggleButton.addEventListener("click", () => {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("mobile-nav__open");
  backdrop.classList.add("open");
});

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

// The below methods are executed when animation happens on cta button.
ctaButton.addEventListener("animationstart", function (event) {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("Animation iteration", event);
});
