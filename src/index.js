// import './sass/main.scss';
import debounce from 'lodash.debounce';
import trottle from 'lodash.throttle';
// import baguetteBox  from  'baguettebox.js' ;
import {galleryContainer} from './js/utils/galleryContainer';
// import { baguetteBox } from './js/utils/arrow';
import {galleryItems} from './js/utils/galleryItems'
import { galeryItemList} from './js/utils/galleryContainer';
// console.log(baguettebox);
// console.log(galeryItemList);
const lightBox = document.querySelector(".js-lightbox");
  const lightBoxOverlay = document.querySelector(".lightbox__overlay");
  const lightBoxContent = document.querySelector(".lightbox__content");
  const lightBoxImg = document.querySelector(".lightbox__image");
  const lightBoxBtn = document.querySelector(".lightbox__button");

  // galleryContainer.addEventListener('click', e => {
    console.log(galleryContainer);
  //   let currentIndex = document.querySelector("gallery__image[data-index]");
  //   console.log(currentIndex);
  // })
// вешаем обозревателя на клик

galleryContainer.addEventListener('click', onClick);
function onClick (evt) {

};

// console.log(currentIndex);
  galleryContainer.addEventListener('click', onOpenModal)
  // const currentIndex =  createItem.dataset.index;
  //  открытие модального окна
//   const gallery = baguetteBox.run('.gallery');
// baguetteBox.show(index, gallery[0]);

// console.log(currentIndex);
   function onOpenModal (event){
     event.preventDefault();
    window.addEventListener('keydown',onEscKeyDown );
    galleryContainer.addEventListener('keydown', onArrowRight, onArrowLeft);
 
     let galeryImage = event.target;
    let currentIndex = event.target.dataset.index;
 



  if(galeryImage.nodeName !== 'IMG'){
       return;
     };
     lightBox.classList.add('is-open');

   
     lightBoxImg.src = galeryImage.dataset.source;
     lightBoxImg.alt = galeryImage.alt;
      
     function onArrowRight() {
    if(currentIndex + 1 > galleryItems.lenght -1) {
        currentIndex = 0;

    } else{
        currentIndex += 1;
    }
    lightBoxImg.src = galeryImage.dataset.source,
    lightBoxImg.alt = galeryImage.alt;
       
    
  

  
}; 
   function onArrowLeft (evt){
if(currentIndex - 1 < 0 ) {
  currentIndex = galleryItems.length - 1;
  } else {
    currentIndex -= 1;
  }
  lightBoxImg.src = galeryImage.dataset.source;
  lightBoxImg.alt = galeryImage.alt;
}

  };
  
    //  const carentActiveImg = document.querySelector("")


    
   
   
    
     
     
  
   
   lightBoxBtn.addEventListener('click', onCloseModal);

  function onCloseModal(event){
    window.removeEventListener('keydown',onEscKeyDown );
    lightBox.classList.remove('is-open');
    //  lightBoxImg.src = "";
     console.log(lightBoxImg);
  };

   function onEscKeyDown (evt){
     console.log(evt);
    
     if(evt.code === 'Escape') {
      // lightBox.classList.remove('is-open');
      onCloseModal();
     }
   };
   
//    function onArrowRight() {
//     if(currentIndex + 1 > galleryItems.lenght -1) {
//         currentIndex = 0;

//     } else{
//         currentIndex += 1;
//     }
//     lightBoxImg(
//       galleryItems[currentIndex].original,
//        galleryItems[currentIndex].description
       
//     );
  

  
// }; 
//    function onArrowLeft (evt){
// if(currentIndex - 1 < 0 ) {
//   currentIndex = galleryItems.length - 1;
//   } else {
//     currentIndex -= 1;
//   }
//   lightBoxImg(
//     galleryItems[currentIndex].original,
//     galleryItems[currentIndex].description
//   );
// }
  //  попробуем реализовать слайдер
  // 1 повесим слушатель на модальное окно
  //  определим функцию прокрутки вправо и влево
  // export const arrowImg = () => {
  
   

     

  
