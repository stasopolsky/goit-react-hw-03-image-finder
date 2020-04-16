// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
import Axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const KEY = '15456393-7a72aab638bb34722d8976118';
const getImages = ({ query, page }) => {
  return Axios.get(
    `${BASEURL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default getImages;
