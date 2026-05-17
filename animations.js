let slideIndex = 1;

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

document.addEventListener('DOMContentLoaded', () => {
  if (slides.length > 0) {
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
  let i;
  if (!slides || slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  if (dots.length > 0 && dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
  }
}
