// main.js

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  // var logo = document.querySelector('.logo');
  // var navbar = document.querySelector('.navbar a');
  var container = document.querySelector('.container');
  
  // Calculate the distance between the top of the page and the top of the '.container' element
  var containerOffset = container.offsetTop;
  
  if (window.scrollY >= containerOffset) {
    header.style.backgroundColor = 'black'; // Change background color when the scroll position reaches the '.container' element
    // logo.style.color = 'white'
    // navbar.style.color = 'white'
  } else {
    header.style.backgroundColor = 'transparent'; // Revert to transparent background when the scroll position is above the '.container' element
  }
});
