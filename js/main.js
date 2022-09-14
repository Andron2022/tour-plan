const hotelSlired = new Swiper(".hotel-slider", {
  loop: true,

  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,

  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по копке меню");
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--visible");
});
