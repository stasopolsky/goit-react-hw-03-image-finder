import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import getImages from '../services/api';

export default class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    allData: [],
    page: 0,
    query: '',
    isModal: false,
    isLoading: false,
    idLargeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      if (query !== '') {
        this.getDataByParams({ query, page });
      }
    }
  }

  getDataByParams = ({ query, page }) => {
    const { allData } = this.state;
    const scrollHeight = page > 1 ? document.documentElement.scrollHeight : 0;
    this.setState({ isLoading: true });
    return (
      getImages({ query, page })
        .then(({ data }) =>
          this.setState({ allData: [...allData, ...data.hits] }),
        )
        // eslint-disable-next-line no-alert
        .catch(error => alert(error))
        .finally(() => {
          this.setState({ isLoading: false });
          window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth',
          });
        })
    );
  };

  handleOnSubmit = e => {
    this.setState({ allData: [], query: e, page: 1 });
  };

  handleLoadeMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  openModal = e => {
    this.setState({ isModal: true, idLargeImageURL: e.target.id });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  getLargeImageURL = () => {
    const { allData, isModal, idLargeImageURL } = this.state;
    const element = allData.find(i => i.id === Number(idLargeImageURL));
    return isModal ? element.largeImageURL : '';
  };

  render() {
    const { allData, isLoading, isModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleOnSubmit} />
        <ImageGallery data={allData} onClick={this.openModal} />
        {isLoading && <Loader />}
        {allData.length > 0 && (
          <LoadMoreButton onClick={this.handleLoadeMore} />
        )}
        {isModal && (
          <Modal onClick={this.closeModal}>
            <img src={this.getLargeImageURL()} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
