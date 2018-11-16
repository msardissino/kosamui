$( document ).ready(function() {
// swiper Slide Marcas
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});
// Fin Swiper Slide Marcas
// Scroll Reveal
  window.sr = ScrollReveal();
  sr.reveal('.info', {
    duration: 3000,
    origin: 'right',
    distance: '500px'
  })
  sr.reveal('.logo', {
    duration: 2500,
    origin: 'left',
    distance: '500px'

  })
  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'top  ',
    distance: '100px'

  })
  sr.reveal('#Carrusel-kosamui', {
    duration: 2000,
    origin: 'bottom',
    distance: '150px'
  })
  sr.reveal('.spray', {
    duration: 2500,
    origin: 'left',
    distance: '150px'
  })
  sr.reveal('.aromatizador', {
    duration: 2500,
    origin: 'top',
    distance: '150px'
  })
  sr.reveal('.difusor', {
    duration: 2500,
    origin: 'right',
    distance: '150px'
  })
  sr.reveal('.emp-title', {
    duration: 2500,
    origin: 'bottom',
    distance: '150px'
  })
  sr.reveal('.emp-text', {
    duration: 2500,
    origin: 'bottom',
    distance: '150px'
  })
//Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();

              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
// hamburguer button
      var $hamburger = $(".hamburger");
      $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
      });
});