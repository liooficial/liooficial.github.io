const slides = document.querySelectorAll('.slides img');
let currentSlideIndex = 0;

function showSlide(index) {
  // Oculta todas las imágenes
  slides.forEach(slide => slide.style.display = 'none');
  // Muestra la imagen en la posición index
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

document.querySelector('.controlButton.prev').addEventListener('click', prevSlide);
document.querySelector('.controlButton.next').addEventListener('click', nextSlide);

// Mostrar la primera imagen al cargar la página
showSlide(currentSlideIndex);

