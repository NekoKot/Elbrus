
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
    document.body.style.removeProperty('overflow')
  }
}
// end

// slider

const dot = document.querySelector('.dot');
const numberOfSlider = document.querySelector('.numbertext');
const sliderImg = document.querySelector('.slider__img');

