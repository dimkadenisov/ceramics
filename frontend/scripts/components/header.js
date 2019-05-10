//header scripts

$(window).scroll( () => {
  if($(window).scrollTop() > 215) {
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
    if(!$('.search-form').hasClass('search-form-opened')) {
      $('.nav-list-scrolled').addClass('d-xl-table-cell');
    }

    if($(document).width() < 1580) {
      $('body').find('.hot-line-tel-num').removeClass('d-lg-inline');
      $('.hot-line-tel-icon').removeClass('d-lg-none');
    }
    } else{
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
      if($(document).width() < 1580) {
        $('body').find('.hot-line-tel-num').addClass('d-lg-inline');
        $('.hot-line-tel-icon').addClass('d-lg-none');
      }
    }
  });

const toggleBurgerMenuState = function(e) {
  if($(document).width() >= 992 && $('.dropdown').hasClass('dropdown-opened')) {
    $('.middle-line-burger-menu').removeClass('middle-line-burger-menu-close');
    $('.dropdown').removeClass('dropdown-opened');
    $('.dropdown-submenu').removeClass('dropdown-submenu-opened');
    $('body').removeClass('overflow-hidden');
  }
};

const toggleNavListState = function(e) {
  if ($(document).width() >= 1200 && $('.search-form').hasClass('search-form-opened')) {
    $('.nav-list-scrolled').removeClass('d-xl-table-cell')
  }
};

const toggleSearchFormState = function(e) {
  if ($(document).width() < 992 && $('.search-form').hasClass('search-form-opened')) {
    $('.search-form').removeClass('search-form-opened');
    $('.search-form-icon').removeClass('search-form-icon-opened');
    $('.search-form-input').removeClass('search-form-input-opened');
    $('.search-form-input').addClass('d-none');
    $('.search-form-button').addClass('d-none');
  }
};

(function () {
  let time;

  window.onresize = function (e) {
    if (time) clearTimeout(time);
    time = setTimeout(function () {
      toggleBurgerMenuState(e);
      toggleNavListState(e);
      toggleSearchFormState(e);
    }, 5);
  };
})();

$('.search-form-icon').on('click', () => {
  if($(document).width() >= 992) {
    if($('.search-form-icon').hasClass('search-form-icon-scrolled')) {
      $('.search-form-icon').toggleClass('search-form-icon-opened');
      $('.search-form-input').toggleClass('search-form-input-opened');
      $('.search-form-input').toggleClass('d-none');
      $('.search-form-button').toggleClass('d-none');
      $('.search-form').toggleClass('search-form-opened');
      $('.nav-list-scrolled').toggleClass('d-xl-table-cell')
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

$('.middle-line-burger-menu').on('click', () => {
  $('.middle-line-burger-menu').toggleClass('middle-line-burger-menu-close');
  $('.dropdown').toggleClass('dropdown-opened');
  $('body').toggleClass('overflow-hidden');
});

$('.isparent').on('click', function(e) {
  e.preventDefault();
  let subMenu = $(this).next('.dropdown-submenu');
  subMenu.addClass('dropdown-submenu-opened');
});

$('.previous').on('click', (e) => {
  e.preventDefault();
  $('.dropdown-submenu').removeClass('dropdown-submenu-opened');
});
