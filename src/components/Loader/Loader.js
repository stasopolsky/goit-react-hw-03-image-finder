import React from 'react';
import ReactLoader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import S from './Loader.module.css';

const Loader = () => {
  return (
    <div className={S.section}>
      <ReactLoader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} // 3 secs
      />
    </div>
  );
};
export default Loader;
