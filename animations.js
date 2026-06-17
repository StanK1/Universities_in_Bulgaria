let slideIndex = 1;

let slides;
let dots;

document.addEventListener('DOMContentLoaded', () => {
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");

  if (slides && slides.length > 0) {
    showSlides(slideIndex);
  }
});

window.plusSlides = function(n) {
  showSlides(slideIndex += n);
}

window.currentSlide = function(n) {
  showSlides(slideIndex = n);
}

window.showSlides = function(n) {
  if (!slides || slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let dot of dots) {
    dot.className = dot.className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  if (dots.length > 0 && dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
  }
}
