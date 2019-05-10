"use strict";

$('.basket-item-name-tooltip').on('click', function () {
  $('.basket-item-name-tooltip-text', this).toggleClass('d-none');
});

function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("Copy"); //alert("text copied") 
  }
}

$(document).ready(function () {
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Пред',
    nextText: 'След',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
  $('.date').datepicker({
    dateFormat: 'dd.mm.yy'
  });
});
$('.catalog-filter-heading').click(function () {
  $('.catalog-filter').toggleClass('catalog-filter-closed');
  $('.catalog-filter-heading').toggleClass('catalog-filter-heading-closed');
}); //header scripts

$(window).scroll(function () {
  if ($(window).scrollTop() > 215) {
    $('.middle-line').addClass('middle-line-scrolled');
    $('.description').removeClass('d-lg-inline-block');
    $('.search-form').addClass('search-form-scrolled'); //!!

    $('.search-form-icon').removeClass('d-xl-none');
    $('.search-form-icon').addClass('search-form-icon-scrolled'); //!!

    $('.search-form-input').removeClass('d-xl-block');
    $('.search-form-button').removeClass('d-xl-block');
    $('.hot-line').addClass('hot-line-scrolled');
    $('.hot-line-tel').addClass('hot-line-tel-scrolled');
    $('.hot-line-text').removeClass('d-lg-block');
    $('.shopping-basket').addClass('shopping-basket-scrolled'); //!!

    $('.logo-link').addClass('logo-link-scrolled'); //!

    if (!$('.search-form').hasClass('search-form-opened')) {
      $('.nav-list-scrolled').addClass('d-xl-table-cell');
    }

    if ($(document).width() < 1580) {
      $('body').find('.hot-line-tel-num').removeClass('d-lg-inline');
      $('.hot-line-tel-icon').removeClass('d-lg-none');
    }
  } else {
    $('.middle-line').removeClass('middle-line-scrolled');
    $('.description').addClass('d-lg-inline-block');
    $('.nav-list-scrolled').removeClass('d-xl-table-cell');
    $('.search-form').removeClass('search-form-scrolled');
    $('.search-form').removeClass('search-form-opened');
    $('.search-form-icon').addClass('d-xl-none');
    $('.search-form-icon').removeClass('search-form-icon-scrolled');
    $('.search-form-icon').removeClass('search-form-icon-opened');
    $('.search-form-input').removeClass('search-form-input-opened');
    $('.search-form-input').addClass('d-none');
    $('.search-form-input').addClass('d-xl-block');
    $('.search-form-button').addClass('d-xl-block');
    $('.search-form-button').addClass('d-none');
    $('.hot-line').removeClass('hot-line-scrolled');
    $('.hot-line-tel').removeClass('hot-line-tel-scrolled');
    $('.hot-line-text').addClass('d-lg-block');
    $('.shopping-basket').removeClass('shopping-basket-scrolled');
    $('.logo-link').removeClass('logo-link-scrolled');

    if ($(document).width() < 1580) {
      $('body').find('.hot-line-tel-num').addClass('d-lg-inline');
      $('.hot-line-tel-icon').addClass('d-lg-none');
    }
  }
});

var toggleBurgerMenuState = function toggleBurgerMenuState(e) {
  if ($(document).width() >= 992 && $('.dropdown').hasClass('dropdown-opened')) {
    $('.middle-line-burger-menu').removeClass('middle-line-burger-menu-close');
    $('.dropdown').removeClass('dropdown-opened');
    $('.dropdown-submenu').removeClass('dropdown-submenu-opened');
    $('body').removeClass('overflow-hidden');
  }
};

var toggleNavListState = function toggleNavListState(e) {
  if ($(document).width() >= 1200 && $('.search-form').hasClass('search-form-opened')) {
    $('.nav-list-scrolled').removeClass('d-xl-table-cell');
  }
};

var toggleSearchFormState = function toggleSearchFormState(e) {
  if ($(document).width() < 992 && $('.search-form').hasClass('search-form-opened')) {
    $('.search-form').removeClass('search-form-opened');
    $('.search-form-icon').removeClass('search-form-icon-opened');
    $('.search-form-input').removeClass('search-form-input-opened');
    $('.search-form-input').addClass('d-none');
    $('.search-form-button').addClass('d-none');
  }
};

(function () {
  var time;

  window.onresize = function (e) {
    if (time) clearTimeout(time);
    time = setTimeout(function () {
      toggleBurgerMenuState(e);
      toggleNavListState(e);
      toggleSearchFormState(e);
    }, 5);
  };
})();

$('.search-form-icon').on('click', function () {
  if ($(document).width() >= 992) {
    if ($('.search-form-icon').hasClass('search-form-icon-scrolled')) {
      $('.search-form-icon').toggleClass('search-form-icon-opened');
      $('.search-form-input').toggleClass('search-form-input-opened');
      $('.search-form-input').toggleClass('d-none');
      $('.search-form-button').toggleClass('d-none');
      $('.search-form').toggleClass('search-form-opened');
      $('.nav-list-scrolled').toggleClass('d-xl-table-cell');
    } else {
      $('.search-form-icon').toggleClass('search-form-icon-opened');
      $('.search-form-input').toggleClass('search-form-input-opened');
      $('.search-form-input').toggleClass('d-none');
      $('.search-form-button').toggleClass('d-none');
      $('.description').toggleClass('d-lg-inline-block');
      $('.search-form').toggleClass('search-form-opened');
    }
  } else {
    $('.middle-line-burger-menu').toggleClass('middle-line-burger-menu-close');
    $('.dropdown').toggleClass('dropdown-opened');
    $('body').toggleClass('overflow-hidden');
  }
});
$('.middle-line-burger-menu').on('click', function () {
  $('.middle-line-burger-menu').toggleClass('middle-line-burger-menu-close');
  $('.dropdown').toggleClass('dropdown-opened');
  $('body').toggleClass('overflow-hidden');
});
$('.isparent').on('click', function (e) {
  e.preventDefault();
  var subMenu = $(this).next('.dropdown-submenu');
  subMenu.addClass('dropdown-submenu-opened');
});
$('.previous').on('click', function (e) {
  e.preventDefault();
  $('.dropdown-submenu').removeClass('dropdown-submenu-opened');
});
$('.grid').masonry({
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  gutter: 0
});
$('.overview').masonry({
  columnWidth: '.overview-sizer',
  itemSelector: '.overview-item',
  percentPosition: true,
  gutter: 0
}); //Numbers

$(document).ready(function () {
  Numbers();

  function Numbers() {
    $(".numbers-row .button").on("click", function () {
      var button = $(this);
      var oldValue = button.parent(".numbers-row").find("input").val();

      if (button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }

      if (oldValue < 0) {
        newVal = 1;
      }

      if (oldValue == "") {
        newVal = 1;
      }

      button.parent(".numbers-row").find("input").val(newVal);
    });
  }
});
var thumbsSwiper;
var mySwiper;

var swiperCatalogInit = function swiperCatalogInit() {
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
    dragabale: false
  });
  mySwiper = new Swiper('.swiper-catalog', {
    direction: 'horizontal',
    keyboard: {
      enabled: true
    },
    thumbs: {
      swiper: thumbsSwiper
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

var thumbsSwiperCard;
var mySwiperCard;

var swiperCardInit = function swiperCardInit() {
  thumbsSwiperCard = new Swiper('.swiper-card-thumbs', {
    spaceBetween: 15,
    slidesPerColumn: 1,
    slidesPerView: 3,
    direction: 'horizontal',
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  mySwiperCard = new Swiper('.swiper-container', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true
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

var swiperIndexInit = function swiperIndexInit() {
  mySwiperIndex = new Swiper('.overview-item-swiper', {
    direction: 'horizontal',
    slideClass: 'overview-item-swiper-slide',
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.overview-item-swiper-pagination',
      modifierClass: 'overview-item-swiper-pagination-',
      bulletClass: 'overview-item-swiper-pagination-bullet',
      bulletActiveClass: 'overview-item-swiper-pagination-bullet-active',
      bulletElement: 'div',
      clickable: true
    },
    navigation: {
      nextEl: '.overview-item-swiper-button-next',
      prevEl: '.overview-item-swiper-button-prev',
      disabledClass: 'overview-item-swiper-button-disabled'
    }
  });
};

$(document).ready(function () {
  swiperCatalogInit();
  swiperCardInit();
  swiperIndexInit();
});

(function () {
  var breakpoint = window.matchMedia('(min-width: 768px)');
  var mySwiper;

  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return swiperArticlesInit();
    }
  };

  var swiperArticlesInit = function swiperArticlesInit() {
    mySwiper = new Swiper('.articles-content', {
      direction: 'horizontal',
      slideClass: 'articles-content-item',
      slidesPerView: '2',
      pagination: {
        el: '.articles-content-pagination',
        modifierClass: 'overview-item-swiper-pagination-',
        bulletClass: 'overview-item-swiper-pagination-bullet',
        bulletActiveClass: 'overview-item-swiper-pagination-bullet-active',
        bulletElement: 'div',
        clickable: true
      },
      keyboard: {
        enabled: true
      },
      breakpoints: {
        575: {
          slidesPerView: 1
        }
      }
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

(function () {
  var breakpointMap = window.matchMedia('(max-width: 991px)');
  var mySwiperMap;

  var breakpointMapChecker = function breakpointMapChecker() {
    if (breakpointMap.matches === true) {
      if (mySwiperMap !== undefined) mySwiperMap.destroy(true, true);
      return;
    } else if (breakpointMap.matches === false) {
      return swiperMapInit();
    }
  };

  var swiperMapInit = function swiperMapInit() {
    mySwiperMap = new Swiper('.map-buy-places', {
      direction: 'vertical',
      slideClass: 'map-buy-places-item-wrapper',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      mousewheel: true
    });
  };

  breakpointMap.addListener(breakpointMapChecker);
  breakpointMapChecker();
})();

(function () {
  var breakpointCharacteristics = window.matchMedia('(max-width: 991px)');
  var mySwiperCharacteristics;

  var breakpointCharacteristicsChecker = function breakpointCharacteristicsChecker() {
    if (breakpointCharacteristics.matches === true) {
      if (mySwiperCharacteristics !== undefined) mySwiperCharacteristics.destroy(true, true);
      return;
    } else if (breakpointCharacteristics.matches === false) {
      return swiperCharacteristicsInit();
    }
  };

  var swiperCharacteristicsInit = function swiperCharacteristicsInit() {
    mySwiperCharacteristics = new Swiper('.characteristics-block-swiper', {
      direction: 'vertical',
      slideClass: 'characteristic',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      mousewheel: true
    });
  };

  breakpointCharacteristics.addListener(breakpointCharacteristicsChecker);
  breakpointCharacteristicsChecker();
})();