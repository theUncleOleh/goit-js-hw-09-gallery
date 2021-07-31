// import './sass/main.scss';
import debounce from 'lodash.debounce';
import trottle from 'lodash.throttle';
import baguetteBox from 'baguettebox.js';
import {galleryContainer} from './js/utils/galleryContainer';
// import {arrowImg} from './js/utils/arrow';


console.log(baguetteBox);
const lightBox = document.querySelector(".js-lightbox");
  const lightBoxOverlay = document.querySelector(".lightbox__overlay");
  const lightBoxContent = document.querySelector(".lightbox__content");
  const lightBoxImg = document.querySelector(".lightbox__image");
  const lightBoxBtn = document.querySelector(".lightbox__button");

 
// вешаем обозревателя на клик
  galleryContainer.addEventListener('click', onOpenModal)
  // const currentIndex =  createItem.dataset.index;
  //  открытие модального окна
   function onOpenModal (event){
     event.preventDefault();
     window.addEventListener('keydown',onEscKeyDown );
     const galeryImage = event.target;

     
 
             // console.log(currentIndex);
 
    
 

     if(galeryImage.nodeName !== 'IMG'){
       return;
     };
     lightBox.classList.add('is-open');

   
     lightBoxImg.src = galeryImage.dataset.source;
     lightBoxImg.alt = galeryImage.alt;
     console.log(lightBoxImg.src);
    //  const carentActiveImg = document.querySelector("")
    galleryContainer.addEventListener('keydown', onArrowRight);
    
      let currentIndex = galeryImage.index
     function onArrowRight() {
    

         if(currentIndex + 1 > galleryContainer.lenght -1) {
             currentIndex = 0;
//  console.log(currentIndex);
         } else{
             currentIndex += 1;
         }
         
         ligthBoxImg(
             galleryContainer[currentIndex].original,
             galleryContainer[currentIndex].description
             );
   } };

   lightBoxBtn.addEventListener('click',onCloseModal,);

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

  //  попробуем реализовать слайдер
  // 1 повесим слушатель на модальное окно
  //  определим функцию прокрутки вправо и влево
  // export const arrowImg = () => {
  
   
     
 