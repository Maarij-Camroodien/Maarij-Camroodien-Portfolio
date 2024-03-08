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


document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});


//slider 

// $(document).ready(function(){
//   $('.arrow').on('click', function(){
//       var currentImg = $('.active');
//       var nextImg = currentImg.next();

//       if(nextImg.length){
//           currentImg.removeClass('active').css('z-index', -10);
//           nextImg.addClass('active').css('z-index', 10);
//       } else {
//           currentImg.removeClass('active').css('z-index', -10);
//           $('.slider-images .slides img:first').addClass('active').css('z-index', 10);
//       }
//   });
// });

// $(document).ready(function(){
//   $('.arrow').on('click', function(){
//       var currentdot = $('.active1');
//       var nextdot = currentdot.next();

//       if(nextdot.length){
//           currentdot.removeClass('active1').css('opacity', 1);
//           nextdot.addClass('active1').css('opacity', 0.5);
//       } else {
//           currentdot.removeClass('active1').css('opacity', 1);
//           $('.slider-dots img:first').addClass('active1').css('opacity', 0.5);
//       }
//   });
// });