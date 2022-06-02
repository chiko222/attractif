'use strict';

{
  //カテゴリーリスト開閉
  const categoryOpen = document.querySelector('.page-recommend-category-list-open');
  const categoryList = document.querySelector('.page-recommend-category-list');
  categoryOpen.addEventListener('click', ()=> {
    const categoryItem = categoryList.children;
    for (let i=0; i<categoryItem.length; i++) {
      categoryItem[i].classList.toggle('open');
    }
  });

  //フィルター機能
  // const categories = document.querySelectorAll('.page-recommend-category-name');
  // const listItems = document.querySelectorAll('.page-recommend-list-item');
  // const className = ['show', 'hide'];
  // const toggleClass = (el, indexA, indexB) => {
  //   el.classList.remove(className[indexA]);
  //   el.classList.add(className[indexB]);
  // };

  // categories.forEach(el => {
  //   el.addEventListener('click', () => {
  //     const categoryName = el.getAttribute('category');
  //     listItems.forEach(item => {
  //       const key = item.getAttribute('filter-key'); 
  //       if(key !== categoryName) {
  //         toggleClass(item, 0, 1);
  //       } else {
  //         toggleClass(item, 1, 0);
  //       }
  //     });
  //   });
  // });

  // const allCategories = document.querySelector('.page-recommend-all');
  // allCategories.addEventListener('click', () => {
  //   listItems.forEach(item => {
  //     toggleClass(item, 1, 0);
  //   });
  // });

  //フィルター機能
  // const categories = document.querySelectorAll('.page-recommend-category-name');
  // const listItems = Array.from(document.querySelectorAll('.page-recommend-list-item'));

  // categories.forEach(el => {
  //   el.addEventListener('click', () => {
  //     const categoryName = el.getAttribute('category');
  //     const newListItems = listItems.filter((item) => {
  //       categoryName === item.getAttribute('filter-key');
  //     });
  //     listItems.forEach(listItem => {
  //       listItem.classList.add('hide');
  //       newListItems.classList.add('show');
  //     })
  //   });
  // });

  const categories = document.querySelectorAll('.page-recommend-category-name');
  const listItems = document.querySelectorAll('.page-recommend-list-item');

  categories.forEach(el => {
    el.addEventListener('click', () => {
      const categoryName = el.getAttribute('category');
      const newListItems = document.querySelectorAll('[data-key="'+categoryName+'"]');
      listItems.forEach(listItem => {
        listItem.classList.add('hide');
      });
      newListItems.forEach(newListItem => {
        newListItem.classList.remove('hide');
      });
    });
  });

  const allCategories = document.querySelector('.page-recommend-all');
  allCategories.addEventListener('click', () => {
    listItems.forEach(listItem => {
      listItem.classList.remove('hide');
    });
  }); 
}