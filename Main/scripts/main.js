document.addEventListener('DOMContentLoaded', ()=>{
  new MobileMenu();


  const fadeImage = function(el, inview){
      if(inview){
        el.classList.add('inview')
      }else{
        // entry.target.classList.remove('inview');
      }
  };
  const so1 = new ScrollObserver('.fade-img', fadeImage);

  
})
