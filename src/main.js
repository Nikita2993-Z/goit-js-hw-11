import './css/styles.css';
import iziToast from 'izitoast';    
import 'izitoast/dist/css/iziToast.min.css'

import {
    createGallery,
    clearGallery,
    showLoader,
    hiddenLoader,
} from './js/render-function';

import { getImagesByQuery } from './js/pixabay-api';

const form  = document.querySelector('.form');
const input = form.quarySelector('input[name="search-text"]');
form.addEventListener('submit', async evt => {
    evt.preventDefault();
    const query = input.value.trim();
    if(!query) {
        iziToast.warning({
            message: 'Поле пошуку не може бути порожнім!',
      position: 'topRight',
        });
        return;
    }
    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if(data.hits.length === 0) {
            iziToast.info({
                message: 'На жаль, нічого не знайдено. Спробуй інше слово.',
                position: 'topRight',
            });

        }else {
            createGallery(data.hits);
        }
    } catch (err) {
        iziToast.error({
            message: 'Сталася помилка! Спробуй ще раз пізніше.',
            position: 'topRight',
        });
        console.error(err);
        
    } finally {
        hiddenLoader();
    }
});