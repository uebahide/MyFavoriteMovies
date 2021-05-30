document.addEventListener('DOMContentLoaded', ()=>{
  new MobileMenu();


  const SlideImage = document.querySelectorAll('.fade-img');

  const callback = function(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('inview')
      }else{
        // entry.target.classList.remove('inview');
      }
    });
  }

  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: 0
  }

  const Observer = new IntersectionObserver(callback, options);

  SlideImage.forEach(el => {
    Observer.observe(el);
  });
})