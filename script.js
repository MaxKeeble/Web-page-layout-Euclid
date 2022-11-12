(function () {
  window.addEventListener('DOMContentLoaded', function () {

    // Слайдер
    const SWIPER = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Табы
    document.querySelectorAll('.how-we-work__button').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {

        const PATH = event.currentTarget.dataset.path;
        document.querySelectorAll('.step').forEach(function (tabContent) {
          tabContent.classList.remove('step-active');
        })
        document.querySelector(`[data-target="${PATH}"]`).classList.add('step-active');


        document.querySelectorAll('.how-we-work__button').forEach(function (tabsBtn) {
          tabsBtn.classList.remove('how-we-work__button_active');
        })
        event.currentTarget.classList.add('how-we-work__button_active');

      })
    })

    // Аккордеон
    $(function () {
      $("#accordion").accordion({
        heightStyle: 'content',
        header: '.details__summary',
        active: true,
        collapsible: true,
        icons: false,
      });
    });

    // Бургер-меню
    const BURGER = document.querySelector('.burger');
    const BURGER_LIST = document.querySelector('.burger__list');

    BURGER.addEventListener('click', function (event) {
      BURGER_LIST.classList.toggle('burger__list_opened');
      event.stopPropagation();
    })

    BURGER_LIST.addEventListener('click', function (event) {
      event.stopPropagation();
    })

    document.body.addEventListener('click', function (event) {
      BURGER_LIST.classList.remove('burger__list_opened');
    })

    // Доступность по клавиатуре
    const ALL_LINKS = document.querySelectorAll('a');
    for (let i = 0; i < ALL_LINKS.length; i++) {
      ALL_LINKS[i].setAttribute('tabindex', i + 1);
      if (ALL_LINKS[i].classList.contains('slider__link')) break;
    }

  })
})();