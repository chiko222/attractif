'use strict';

{
  //loading
  const loading = document.querySelector('.loading');
  window.addEventListener('load', () => {
    window.setTimeout (() => {
      loading.classList.add('hide');
    }, 1500);
  });

  //header slider
  const slideImg = document.querySelectorAll('.top-header-img');
  let count  = 0;
  slideImg[count].classList.add('appear');
  const slideChange = () => {
    slideImg[count].classList.remove('appear');
    count++;
    if(count === slideImg.length) {
      count = 0;
    }
    slideImg[count].classList.add('appear');
  }
  setInterval(slideChange, 6000);

  //modal window
  const modal = document.querySelector('.modal-info');
  const mask = document.querySelector('.mask');
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      mask.classList.add('active');
      modal.classList.add('show');
    }, 4000);
  });
  const modalClose = document.querySelector('.modal-close');
  modalClose.addEventListener('click', () => {
    mask.classList.remove('active');
    modal.classList.remove('show');
  });

  //swiper
  window.addEventListener('load', () => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      slidesPerView: 1.5,
      spaceBetween: 32,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 64
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 80

        }
      },
      centeredSlides: true,
      speed: 1500, 
      allowTouchMove: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  });
}