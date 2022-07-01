//ローディング
const loading = {
  template: `  
    <transition name="fadeSlow">
      <div class="loading" v-show="load">
        <transition name="fadeSlow" appear>
          <p class="loading__logo">Attractif</p>
        </transition>
      </div>
    </transition>
  `,
  data() {
    return {
      load: true
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.load = false;
    }, 2500);
  }
}

//モーダルウィンドウ
const modal = {
  template: `
    <transition name="fade">
      <div class="modal__wrapper" v-show="modal">
        <section class="modal">
          <div class="modal__close" @click="close">
            <span></span>
            <span></span>
          </div>
          <h3 class="modal__logo">ニュースレター登録</h3>
          <p class="modal__text">最新情報やお得なご案内をいち早くお届けいたします。</p>
          <a href="" class="modal__btn">登録</a>
        </section>
      </div>
    </transition>
  `,
  data() {
    return {
      modal: false
    }
  },
  methods: {
    close() {
      this.modal = false;
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.modal = true;
    }, 6000);
  }
}

Vue.createApp({
  components: {
    'loading': loading,
    'modal': modal
  }
}).mount('#intro');

//キービジュアル
const kvSlide = {
  template: `
    <div class="kv__container">
      <div class="kv__img" v-for="img in imgList" :key="img">        
        <img :src="img.src" :srcset="img.srcset">
      </div>        
    </div>
  `,
  props: {
    imgList: Array
  },
  methods: {
    sort() {
      //配列入れ替え
      const firstImg = this.imgList[0];
      this.imgList.shift();
      this.imgList.push(firstImg);
      //表示入れ替え
      const newFirstImg = this.imgList[0].src;
      const images = document.querySelectorAll('.kv__img');
      images.forEach(image => {
        const img = image.firstElementChild;
        if(img.getAttribute('src') === newFirstImg) {
          image.classList.add('show');
        } else {
          image.classList.remove('show');
        }       
      })
    }
  },
  mounted() {
    const images = document.querySelectorAll('.kv__img');
    images[0].classList.add('show');
    let timerId = setInterval(this.sort, 8000);
  }
}

Vue.createApp({
  template: `
    <kv-slide :imgList="kvImgList"></kv-slide>
  `,
  components: {
    'kv-slide': kvSlide
  },
  data() {
    return {
      kvImgList: [
        {src: 'img/bg-top-kv01@2x.jpg', srcset: 'img/bg-top-kv01.jpg 1x, img/bg-top-kv01@2x.jpg 2x'},   
        {src: 'img/bg-top-kv02@2x.jpg', srcset: 'img/bg-top-kv02.jpg 1x, img/bg-top-kv02@2x.jpg 2x'},   
        {src: 'img/bg-top-kv03@2x.jpg', srcset: 'img/bg-top-kv03.jpg 1x, img/bg-top-kv03@2x.jpg 2x'}   
      ]
    }
  }
}).mount('#slider__apps');

//Pick Up カルーセル
window.addEventListener('load', () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    slidesPerView: 1.5,
    spaceBetween: 64,
    breakpoints: {
      768: {
        slidesPerView: 2,
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

//スクロールに合わせてフェードイン
window.addEventListener('scroll', () => {
  const fadeInTargets = document.querySelectorAll('.fadeIn');
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  fadeInTargets.forEach(target => {
    const rect = target.getBoundingClientRect().top;     
    const offset = rect + scroll;      
    if(scroll > offset - windowHeight) {
      if(target.classList.contains('fadeIn--order')) {
        target.style.opacity = '1';
        const fadeUpOrder = Array.from(target.querySelectorAll('.fadeIn--order'));
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
});

//ページトップへスクロール
const scroll = Vue.createApp({
  data() {
    return {
      arrive: false
    }
  },
  methods: {
    toggle() {
      const scroll = window.scrollY;
      if(scroll > 1000) {
        this.arrive = true;
      } else {
        this.arrive = false;
      }
    },
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.toggle);
  }
}).mount('#scrollTop')