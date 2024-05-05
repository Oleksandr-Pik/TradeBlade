const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 8,
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    640: {
      slidesPerView: 2.1,
    },
    1024: {
      slidesPerView: 3.2,
    },
    1440: {
      slidesPerView: 4,
    }
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
  },
});
