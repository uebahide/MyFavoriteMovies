const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints:{
    1024:{
      slidesPerView: 2
    }
  }
});