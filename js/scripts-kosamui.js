$( document ).ready(function() {
// swiper Slide Nuevos Productos
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 5,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});
// Fin Swiper Slide Nuevos productos
// Scroll Reveal
  window.sr = ScrollReveal();
  sr.reveal('.info', {
    duration: 3000,
    origin: 'left',
    distance: '100px',
    delay: 500,
  })
  sr.reveal('.logo', {
    duration: 2500,
    origin: 'left',
    delay: 500,
    distance:'150px'

  })
  sr.reveal('.navbar-nav', {
    duration: 2000,
    origin: 'top',
    distance: '100px'

  })
  sr.reveal('#Carrusel-kosamui', {
    duration: 2000,
    delay: 200
  })
  sr.reveal('.col-empresa h3', {
    duration: 2000,
    origin:'bottom',
    distance:'150px',
    delay: 200
  })
  sr.reveal('.col-empresa p', {
    duration: 2000,
    origin:'bottom',
    distance:'150px',
    delay: 200
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