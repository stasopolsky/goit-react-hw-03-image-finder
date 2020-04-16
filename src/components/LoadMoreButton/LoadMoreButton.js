import React from 'react';
import PropTypes from 'prop-types';
import S from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className={S.section}>
      <button className={S.Button} type="button" onClick={onClick}>
        Loade more
      </button>
    </div>
  );
};
LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
