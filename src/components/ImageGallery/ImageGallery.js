import React from 'react';

import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import S from './ImageGallery.module.css';

const ImageGallery = ({ data, onClick }) => {
  return (
    <ul className={S.ImageGallery}>
      {data.length > 0 &&
        data.map(i => {
          return <ImageGalleryItem data={i} key={i.id} onClick={onClick} />;
        })}
    </ul>
  );
};
ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
