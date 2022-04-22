document.addEventListener('DOMContentLoaded', () => {
    const elementosCarrusel = document.querySelectorAll('.carousel');
    M.Carousel.init (elementosCarrusel, {
     duration: 450,
     dist: -80,
     shift: 5,
     padding: 5,
     numVisble: 5,
     indicators: true,
     noWrap: true,
    });
});
  
