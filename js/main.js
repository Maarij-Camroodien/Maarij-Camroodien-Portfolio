// main.js

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var container = document.querySelector('.container');
  
  var containerOffset = container.offsetTop;
  
  if (window.scrollY >= containerOffset) {
    header.style.backgroundColor = 'black';

  } else {
    header.style.backgroundColor = 'black';
  }
});


document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});



const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
  carouselSlides.forEach((slide, i) => {
    slide.style.display = i === index ? 'inline-grid' : 'none';
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselSlides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselSlides.length - 1;
  }
  showSlide(currentIndex);
}

// Initially show the first slide
showSlide(currentIndex);

// Add event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);
