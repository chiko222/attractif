//グローバルナビ
const gnav = {
  template: `
    <div class="hamburgerMenu" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- オーバーレイ -->
    <transition name="slide">
    <div class="gnav" v-show="gnav">
      <nav>
        <ul>
          <li class="gnav__item" v-for="item in items" :key="item"><a href="#">{{ item }}</a></li>
        </ul>
      </nav>
      <ul class="gnav__snsLinks snsLinks">
        <li v-for="icon in icons" :key="icon"><a href="" target="_blank" rel="noopener noreferrer"><i class="fa-brands" :class="icon"></i></a></li>
      </ul>
    </div>
    </transition>
  `,
  data() {
    return {
      gnav: false,
      items: [
        'Top',
        'Online Shop',
        'Collection',
        'Bridal',
        'Concept',
        'News',
        'Contact'
      ],
      icons: [
        'fa-twitter',
        'fa-facebook-f',
        'fa-instagram'
      ]
    }
  },
  methods: {
    toggle() {
      if(this.gnav) {
        this.gnav = false;
      } else {
        this.gnav = true;
      }
      const toggle = document.querySelector('.hamburgerMenu');
      toggle.classList.toggle('active');
    }
  }
}

Vue.createApp({
  components: {
    'gnav': gnav
  }
}).mount('#header');

//商品情報
const items =  [
  {id: 1, img: 'img/pic-list-recommend01@2x.jpg', imgset: 'img/pic-list-recommend01.jpg 360w, img/pic-list-recommend01@2x.jpg 720w', alt: 'リング01', name: 'リング01',  price: '¥32,800', category: 'Ring', color: 'ゴールド、シルバー', size: '7号、9号、11号、13号、15号', quantity: 1},
  {id: 2, img: 'img/pic-list-recommend02@2x.jpg', imgset: 'img/pic-list-recommend02.jpg 360w, img/pic-list-recommend02@2x.jpg 720w', alt: 'ピアス01', name: 'ピアス01', price: '¥24,000', category: 'Pierces', color: 'ゴールド', size: 'one size', quantity: 1},
  {id: 3, img: 'img/pic-list-recommend03@2x.jpg', imgset: 'img/pic-list-recommend03.jpg 360w, img/pic-list-recommend03@2x.jpg 720w', alt: 'ヘアアクセサリー01', name: 'ヘアアクセサリー01', price: '¥14,500', category: 'Hair Accessory', color: 'ゴールド', size: 'one size', quantity: 1},
  {id: 4, img: 'img/pic-list-recommend04@2x.jpg', imgset: 'img/pic-list-recommend04.jpg 360w, img/pic-list-recommend04@2x.jpg 720w', alt: 'ピアス02',  name: 'ピアス02',price: '¥21,500', category: 'Pierces', color: 'ゴールド', size: 'one size', quantity: 1},
  {id: 5, img: 'img/pic-list-recommend05@2x.jpg', imgset: 'img/pic-list-recommend05.jpg 360w, img/pic-list-recommend05@2x.jpg 720w', alt: 'リング02', name: 'リング02', price: '¥38,400', category: 'Ring', color: 'ゴールド', size: '7号、9号、11号、13号、15号', quantity: 1},
  {id: 6, img: 'img/pic-list-recommend06@2x.jpg', imgset: 'img/pic-list-recommend06.jpg 360w, img/pic-list-recommend06@2x.jpg 720w', alt: 'ピアス03', name: 'ピアス03', price: '¥19,000', category: 'Pierces', color: 'パール', size: 'one size', quantity: 1},
  {id: 7, img: 'img/pic-list-recommend07@2x.jpg', imgset: 'img/pic-list-recommend07.jpg 360w, img/pic-list-recommend07@2x.jpg 720w', alt: 'ネックレス01', name: 'ネックレス01', price: '¥28,800', category: 'Necklace', color: 'シルバー', size: 'one size', quantity: 1},
  {id: 8, img: 'img/pic-list-recommend08@2x.jpg', imgset: 'img/pic-list-recommend08.jpg 360w, img/pic-list-recommend08@2x.jpg 720w', alt: 'ネックレス02', name: 'ネックレス02', price: '¥20,500', category: 'Necklace', color: 'ゴールド', size: 'one size', quantity: 1},
  {id: 9, img: 'img/pic-list-recommend09@2x.jpg', imgset: 'img/pic-list-recommend09.jpg 360w, img/pic-list-recommend09@2x.jpg 720w', alt: 'ピアス04', name: 'ピアス04', price: '¥10,500', category: 'Pierces', color: 'クリア', size: 'one size', quantity: 1},
  {id: 10, img: 'img/pic-list-recommend10@2x.jpg', imgset: 'img/pic-list-recommend10.jpg 360w, img/pic-list-recommend10@2x.jpg 720w', alt: 'ネックレス03',  name: 'ネックレス03', price: '¥19,000', category: 'Necklace', color: 'ゴールド', size: 'one size', quantity: 1},
]

//Recommend
const recommend = Vue.createApp({
  data() {
    return {
      categoryOpen: false,
      categories: [
        'All', 'Necklace', 'Ring', 'Pierces', 'Hair Accessory'
      ],
      list: []
    }
  },
  methods: {
    toggle() {
      if(this.categoryOpen) {
        this.categoryOpen = false;
      } else {
        this.categoryOpen = true;
      }
      const toggle = document.querySelector('.category__toggle');
      toggle.classList.toggle('active');
    },
    filter(event) {
      if(event.target.dataset.filter === 'All'){
        this.list =items.slice();
      } else {
        const filter = event.target.dataset.filter;
        this.list = items.filter(item => item.category === filter);
      }
    }
  },
  mounted() {
    this.list = items.slice();
  }
}).mount('#recommend')

