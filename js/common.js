'use strict';

{
  //グローバルナビゲーション
  const gnavOpen = document.querySelector('.hamburger-menu');
  const overlay = document. querySelector('.overlay');
  const links = overlay.querySelectorAll('a');

  gnavOpen.addEventListener('click', () => {
    gnavOpen.classList.toggle('active');
    overlay.classList.toggle('show');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      gnavOpen.classList.remove('active');
      overlay.classList.remove('show');
    });
  });

  //スクロールイベント
  window.addEventListener('scroll', () => {
    //スクロールに合わせてフェードイン
    const fadeInTargets = document.querySelectorAll('.c-fade-in');
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    fadeInTargets.forEach(target => {
      const rect = target.getBoundingClientRect().top;     
      const offset = rect + scroll;      
      if(scroll > offset - windowHeight) {
        if(target.classList.contains('c-fade-in--order')) {
          target.style.opacity = '1';
          const fadeUpOrder = Array.from(target.querySelectorAll('.c-fade-in-order-item'));
          for(let i=0; i < fadeUpOrder.length; i++) {
            const orderSp = String(i * 0.4);
            const orderPc = String(i * 0.25);
            if (window.matchMedia('(max-width:767px)').matches) {
              fadeUpOrder[i].style.transitionDelay = orderSp + 's';
            } else if (window.matchMedia('(min-width:768px)').matches) {
              fadeUpOrder[i].style.transitionDelay = orderPc + 's';
            }
            fadeUpOrder[i].classList.add('show');
          }
        } else {
          target.classList.add('show');
        }
      }
    });

    //ページトップへスクロール
    const pageTop = document.querySelector('.page-top');
    if(scroll > 1000) {
      pageTop.classList.remove('down');
      pageTop.classList.add('up');
    } else {
      pageTop.classList.remove('up');
      pageTop.classList.add('down');
    }
    pageTop.addEventListener('click', () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}