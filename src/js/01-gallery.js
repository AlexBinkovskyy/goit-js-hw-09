// Add imports above this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const key = [];
galleryItems.map(item => {
  key.push(
    `<li class="gallery"> <a href="${item.original}"><img src="${item.preview}" alt="" title="${item.description}"/></a>`
  );
});
galleryList.insertAdjacentHTML('afterbegin', key.join(''));

const gallery = new SimpleLightbox('.gallery a');
