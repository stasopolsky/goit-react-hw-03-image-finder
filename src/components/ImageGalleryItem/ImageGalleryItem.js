import React from 'react';

import PropTypes from 'prop-types';
import S from './ImageGalleryItem.module.css';

// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGalleryItem = ({ data, onClick }) => {
  return (
    <li className={S.ImageGalleryItem} role="presentation" onClick={onClick}>
      <img
        src={data.webformatURL}
        alt={data.tags}
        id={data.id}
        className={S.ImageGalleryItemImage}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
