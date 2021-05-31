class Slider{
  constructor(el, options){
    this.el = el,
    this.defaultOptions = {
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
    },
    this.options = Object.assign(this.defaultOptions, options),
    this.Swiper= this._initSwiper()
  }

  _initSwiper(){
    return new Swiper(this.el, this.options);
  }

  Start(options={}){
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false,//マウスで操作した後もautoplayが消えない
    }, options);
    this.Swiper.params.autoplay = options;
    this.Swiper.autoplay.start();
  }

  Stop(){
    this.Swiper.autoplay.stop();
  }
}