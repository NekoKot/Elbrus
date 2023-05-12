// form
const btnBackCall = document.querySelector(".header__contacts .btn");
const popupWrapper = document.querySelector(".popup__wrapper");
const popup = document.querySelector(".popup");
const popupCross = document.querySelector(".popup__cross");

btnBackCall.addEventListener("click", openPopup);

function openPopup() {
  if (!popupWrapper.classList.contains("active-popup")) {
    popupWrapper.classList.add("active-popup");
    document.body.style.overflow = "hidden";
  }
}

popupCross.addEventListener("click", closePopup);

function closePopup() {
  if (popupWrapper.classList.contains("active-popup")) {
    popupWrapper.classList.remove("active-popup");
    document.body.style.removeProperty("overflow");
  }
}
// end

// slider

const dotsWrapper = document.querySelector(".right__dottes");
const sliderItem = document.querySelectorAll(".slider__item");
const dot = document.querySelector(".dot");

const sliderItems = document.querySelector(".slider__items");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

const sliderId = document.querySelector(".slider__indicators");

const sliders = Array.from(sliderItems.children);
const dots = Array.from(dotsWrapper.children);
const indicator = Array.from(sliderId.children);

// Скрываем все слайды
sliders.forEach(function (sliders, index) {
  if (index !== 0) {
    sliders.classList.add("hidden");
  }
});

dots[0].addEventListener("click", function () {
  dots[1].style.background = "#8c8c8c";
  dots[2].style.background = "#8c8c8c";
  this.style.background = "#dedede";
  sliders[2].classList.add("hidden");
  sliders[1].classList.add("hidden");
  sliders[0].classList.remove("hidden");
  indicator[1].classList.remove("active");
  indicator[2].classList.remove("active");
  indicator[0].classList.add("active");
});

dots[1].addEventListener("click", function () {
  dots[0].style.background = "#8c8c8c";
  dots[2].style.background = "#8c8c8c";
  this.style.background = "#dedede";
  sliders[0].classList.add("hidden");
  sliders[2].classList.add("hidden");
  sliders[1].classList.remove("hidden");
  indicator[0].classList.remove("active");
  indicator[2].classList.remove("active");
  indicator[1].classList.add("active");
});

dots[2].addEventListener("click", function () {
  dots[0].style.background = "#8c8c8c";
  dots[1].style.background = "#8c8c8c";
  this.style.background = "#dedede";
  sliders[0].classList.add("hidden");
  sliders[1].classList.add("hidden");
  sliders[2].classList.remove("hidden");
  indicator[0].classList.remove("active");
  indicator[1].classList.remove("active");
  indicator[2].classList.add("active");
});

// Slider in block About us

const arrow = document.querySelectorAll(".arrow");
const numbers = document.querySelector(".numbers");
const indicators = document.querySelector(".about__slider-indicators");
const cards = document.querySelectorAll(".about__card");
const container = document.querySelector(".about__slider-col");

let current = 0;
let prevCard = 4;
let nextCard = 1;

const allCards = Array.from(cards);
const buttons = Array.from(arrow);

// Скрываем все слайды. кроме текущего
allCards.forEach(function (allCards, activeCard) {
  if (activeCard) {
    allCards.classList.add("card__invisible");
  }
});

// Клик по стрелкам

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(cards.length - 1);

const gotoNext = function () {
  current < 5 ? gotoNum(current + 1) : gotoNum(0);
};

const gotoNum = (number) => {
  current = number;
  prevCard = current - 1;
  nextCard = current + 1;

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("activeCard");
    cards[i].classList.add("card__invisible");
  }

  if (nextCard == 4) {
    nextCard = 0;
  }

  if (prevCard == 0) {
    prevCard = 4;
  }

  cards[current].classList.add("activeCard");
  cards[prevCard].classList.add("card__invisible");
};


// const gap = 16;

// const carousel = document.getElementsByClassName("about__slider"),
//   content = document.getElementsByClassName("about__slider-col"),
//   next = document.getElementsByClassName("arrow-forward"),
//   prev = document.getElementsByClassName("arrow-back");

// next.addEventListener("click", (e) => {
//   content.scrollBy(width + gap, 0);
//   if (content.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", (e) => {
//   carousel.scrollBy(-(width + gap), 0);
//   if (carousel.scrollLeft - width - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });

// let width = carousel.offsetWidth;
// window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
