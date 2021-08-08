import {galleryItems} from './galleryItems'

 
 export  const galleryContainer = document.querySelector(".js-gallery")


//  cоздали разметку и загрузили ее на страницу
export const galeryItemList = galleryItems.map(( item, index) => {
 const createItem = document.createElement('li');
createItem.classList.add("gallery__item");



  const createLink = document.createElement('a');
  createLink.classList.add("gallery__link");
  createLink.href = `${item.preview}` ;
  const createImg = document.createElement('img');

  createImg.classList.add("gallery__image");
  createImg.dataset.index = `${index}`

  
// console.log(currentIndex);
  createImg.src = `${item.preview}` ;
 createImg.dataset.source = `${item.original}`
  createImg.alt = `${item.description}`;
  // console.log(createImg);

  createLink.appendChild(createImg);
  createItem.appendChild(createLink);
  // console.log(createItem);
return createItem;
  });
 
  galleryContainer.append(...galeryItemList);

  