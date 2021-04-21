//SWIPER ANIMATION ONE SLIDE CAROUSEL

window.onload = () => {
  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
