document.addEventListener('DOMContentLoaded', ()=>{
  new MobileMenu();
  const heroSlider = new Slider('.swiper-container');
  const informationSlider = new Slider('.information-swiper-container',{
    effect: 'slide',
    centeredSlides: false,
    slidesPerView: 2,
    breakpoints: {
      600:{
        slidesPerView: 3
      },

      960:{
        slidesPerView: 4
      }
    }
  });
  informationSlider.Start();

  const fadeImage = function(el, inview){
      if(inview){
        el.classList.add('inview')
      }else{
        // entry.target.classList.remove('inview');
      }
  };
  const so1 = new ScrollObserver('.fade-img', fadeImage);


  const header = document.querySelector('.header');
  const navAnimation = function(el, inview){
      if(inview){
        header.classList.remove('triggered');
      }else{
        header.classList.add('triggered');
      }
  };
  const so2 = new ScrollObserver('.nav-trigger', navAnimation, {once: false});
})
