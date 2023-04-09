function init() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: () => {
        const loading = document.querySelector('.swiper-loading');
        const swiperInner = document.querySelector('.swiper-wrapper');
  
        loading && loading.remove();
        swiperInner && swiperInner.classList.remove('hidden');
      }
    }
  });
}

window.addEventListener('load', () => {
  let script = document.createElement('script');
  script.src = 'swiper-bundle.min.js';
  script.async = false;
  script.defer = false;
  script.onload = init;
  
  document.body.appendChild(script);
});