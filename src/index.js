// import './sass/main.scss';
import debounce from 'lodash.debounce';
import trottle from 'lodash.throttle';
import {galleryContainer} from './js/utils/galleryContainer';
// import {getModal} from './js/utils/getModal';
// console.log({galleryContainer});
//  console.log(getModal);

const lightBox = document.querySelector(".js-lightbox");
  const lightBoxOverlay = document.querySelector(".lightbox__overlay");
  const lightBoxContent = document.querySelector(".lightbox__content");
  const lightBoxImg = document.querySelector(".lightbox__image");
  const lightBoxBtn = document.querySelector(".lightbox__button");

 
// вешаем обозревателя на клик
  galleryContainer.addEventListener('click', onOpenModal)
    

  //  открытие модального окна
   function onOpenModal (event){
     event.preventDefault();
     window.addEventListener('keydown',onEscKeyDown );
     const galeryImage = event.target;
     if(galeryImage.nodeName !== 'IMG'){
       return;
     };
     lightBox.classList.add('is-open');

   
     lightBoxImg.src = galeryImage.dataset.source;
     lightBoxImg.alt = galeryImage.alt;
     console.log(lightBoxImg.src);
    //  const carentActiveImg = document.querySelector("")

   };

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