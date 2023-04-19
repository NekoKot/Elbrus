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

const dotsWrapper = document.querySelector('.right__dottes');
const sliderItem = document.querySelectorAll(".slider__item");
const dot = document.querySelector(".dot");

const sliderItems = document.querySelector(".slider__items");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

const sliderId = document.querySelector('.slider__indicators');

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
  dots[1].style.background = '#8c8c8c';
  dots[2].style.background = '#8c8c8c';
  this.style.background = '#dedede';
  sliders[2].classList.add('hidden');
  sliders[1].classList.add('hidden');
  sliders[0].classList.remove('hidden');
  indicator[1].classList.remove('active-two');
  indicator[2].classList.remove('active-three');
  indicator[0].classList.add('active');
});

dots[1].addEventListener("click", function () {
    dots[0].style.background = '#8c8c8c';
    dots[2].style.background = '#8c8c8c';
    this.style.background = '#dedede';
    sliders[0].classList.add('hidden');
    sliders[2].classList.add('hidden');
    sliders[1].classList.remove('hidden');
    indicator[0].classList.remove('active');
    indicator[1].classList.add('active-two');
});

dots[2].addEventListener("click", function () {
  dots[0].style.background = '#8c8c8c';
  dots[1].style.background = '#8c8c8c';
  this.style.background = '#dedede';
  sliders[0].classList.add('hidden');
  sliders[1].classList.add('hidden');
  sliders[2].classList.remove('hidden');
  indicator[0].classList.remove('active');
  indicator[1].classList.remove('active-two');
  indicator[2].classList.add('active-three');
});

// first.addEventListener("click", function (e, sliders[1]) {
//   e.target.style.background = "#dedede";
//   sliders[1].classList.remove('hidden');
// }

// second.addEventListener("click", function (e) {
//   sliders.classList.remove("hidden");
//   sliders[1].style.display = 'block';
//   e.target.style.background = "#dedede";
// });

  //   } else if (e.target.classList.contains("second")) {
  //     sliders[0].style.display = 'none';
  //     sliders[1].classList.remove('hidden');
  //     e.target.style.background = "#dedede";
  //   } else if (e.target.classList.contains('third')){
  //     sliders[2].style.display = 'block';
  //     e.target.style.background = "#dedede";
  //   }
  // });

// Клик по кнопке

/*
/ Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > sliderItem.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderItem.length;
  }
  for (i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  sliderItem[slideIndex - 1].style.display = "block";
  dot[slideIndex - 1].className += " active";
}
*/
