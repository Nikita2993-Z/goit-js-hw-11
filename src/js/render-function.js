import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = documen.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightBox = new SimpleLightBox('.gallery a');

export function createGallery(img) {
    const markup = images
    .map(image => 
        `<li class ="gallery-item">
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
          <div class="info">
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
          </div>
        </li>`
    )
    .join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
lightBox.refresh();
}

export function clearGallery () {
    galleryContainer.innerHTML = '';
}
export function showLoader () {
    loader.classlist.remove('hidden');

}
export function hiddenLoader () {
    loader.classList.add('hidden');
}