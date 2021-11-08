let slideIndex = 2;

let slider = document.getElementById("slider");

let slides = slider.getElementsByClassName("slide");

let slideControl = document.getElementById("slide-control");

let slideControlItems =
  slideControl.getElementsByClassName("slide-control-item");

slider.style.marginTop = "-" + slideIndex + "00vh";
setTimeout(() => {
  slideControlItems[slideIndex].classList.add("active");
  slides[slideIndex].classList.add("active");
}, 500);

chooseProduct = (index) => {
  if (index === slideIndex) return;

  slideIndex = index;

  let currSlideControl = slideControl.querySelector(
    ".slide-control-item.active"
  );
  currSlideControl.classList.remove("active");

  let currSlide = slider.querySelector(".slide.active");

  slider.style.marginTop = "-" + slideIndex + "00vh";
  slideControlItems[slideIndex].classList.add("active");
};

Array.from(slideControlItems).forEach((e, index) => {
  e.onclick = function () {
    chooseProduct(index);
  };
});
