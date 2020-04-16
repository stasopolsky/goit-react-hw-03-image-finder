import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initState = {
  input: '',
};

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { input } = this.state;
    onSubmit(input);
    this.setState({ ...initState });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleOnSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleOnChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
