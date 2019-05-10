var thumbsSwiper;
var mySwiper;

const swiperCatalogInit = () => {
  thumbsSwiper = new Swiper('.swiper-thumbs', {
    spaceBetween: 15,
    slidesPerColumn: 2,
    slidesPerView: 4,
    direction: 'vertical',
    slideToClickedSlide: true,
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    slideActiveClass: 'swiper-thumbs-thumb-active',
    // slideActiveClass: 'swiper-slide-thumb-active',
    dragabale: false,
  });

  mySwiper = new Swiper ('.swiper-catalog', {
    direction: 'horizontal',
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: thumbsSwiper
    },
    pagination: {
      el: '.swiper-catalog-pagination',
      bulletClass: 'swiper-catalog-pagination-bullet',
      bulletActiveClass: 'swiper-catalog-pagination-bullet-active',
      bulletElement: 'div',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-catalog-button-next',
      prevEl: '.swiper-catalog-button-prev',
      disabledClass: 'swiper-catalog-button-disabled',
    },
  });
}

var thumbsSwiperCard;
var mySwiperCard;

const swiperCardInit = () => {
  thumbsSwiperCard = new Swiper('.swiper-card-thumbs', {
    spaceBetween: 15,
    slidesPerColumn: 1,
    slidesPerView: 3,
    direction: 'horizontal',
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  mySwiperCard = new Swiper('.swiper-container', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true,
    },
    thumbs: {
        swiper: thumbsSwiperCard
    },
    pagination: {
        el: '.swiper-catalog-pagination',
        bulletClass: 'swiper-catalog-pagination-bullet',
        bulletActiveClass: 'swiper-catalog-pagination-bullet-active',
        bulletElement: 'div',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-catalog-button-next',
        prevEl: '.swiper-catalog-button-prev',
        disabledClass: 'swiper-catalog-button-disabled'
    }
  });
};

var mySwiperIndex;

const swiperIndexInit = () => {
  mySwiperIndex = new Swiper ('.overview-item-swiper', {
    direction: 'horizontal',
    slideClass: 'overview-item-swiper-slide',
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.overview-item-swiper-pagination',
      modifierClass: 'overview-item-swiper-pagination-',
      bulletClass: 'overview-item-swiper-pagination-bullet',
      bulletActiveClass: 'overview-item-swiper-pagination-bullet-active',
      bulletElement: 'div',
      clickable: true,
    },
    navigation: {
      nextEl: '.overview-item-swiper-button-next',
      prevEl: '.overview-item-swiper-button-prev',
      disabledClass: 'overview-item-swiper-button-disabled',
    },
  });
}



$(document).ready(function () {

  swiperCatalogInit();
  swiperCardInit();
  swiperIndexInit();

});

(function() {
  const breakpoint = window.matchMedia( '(min-width: 768px)' );
  let mySwiper;

  const breakpointChecker = () => {
    if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;

    } else if ( breakpoint.matches === false ) {
      return swiperArticlesInit();
    }

  };

  const swiperArticlesInit = () => {
    mySwiper = new Swiper ('.articles-content', {
      direction: 'horizontal',
      slideClass: 'articles-content-item',
      slidesPerView: '2',
      pagination: {
        el: '.articles-content-pagination',
        modifierClass: 'overview-item-swiper-pagination-',
        bulletClass: 'overview-item-swiper-pagination-bullet',
        bulletActiveClass: 'overview-item-swiper-pagination-bullet-active',
        bulletElement: 'div',
        clickable: true,
      },
      keyboard: {
        enabled: true,
      },
      breakpoints: {     
        575: {       
          slidesPerView: 1,
        },     
      } 
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

})();

(function() {
  const breakpointMap = window.matchMedia( '(max-width: 991px)' );
  let mySwiperMap;

  const breakpointMapChecker = () => {
    if ( breakpointMap.matches === true ) {
      if ( mySwiperMap !== undefined ) mySwiperMap.destroy( true, true );
      return;

    } else if ( breakpointMap.matches === false ) {
      return swiperMapInit();
    }

  };

  const swiperMapInit = () => {
    mySwiperMap = new Swiper ('.map-buy-places', {
      direction: 'vertical',
      slideClass: 'map-buy-places-item-wrapper',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
  }

  breakpointMap.addListener(breakpointMapChecker);
  breakpointMapChecker();

})();

(function() {
  const breakpointCharacteristics = window.matchMedia( '(max-width: 991px)' );
  let mySwiperCharacteristics;

  const breakpointCharacteristicsChecker = () => {
    if ( breakpointCharacteristics.matches === true ) {
      if ( mySwiperCharacteristics !== undefined ) mySwiperCharacteristics.destroy( true, true );
      return;

    } else if ( breakpointCharacteristics.matches === false ) {
      return swiperCharacteristicsInit();
    }

  };

  const swiperCharacteristicsInit = () => {
    mySwiperCharacteristics = new Swiper ('.characteristics-block-swiper', {
      direction: 'vertical',
      slideClass: 'characteristic',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
  }

  breakpointCharacteristics.addListener(breakpointCharacteristicsChecker);
  breakpointCharacteristicsChecker();

})();


