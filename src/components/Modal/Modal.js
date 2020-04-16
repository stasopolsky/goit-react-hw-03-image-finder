import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  state = {};

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPressESC);
  }

  handleKeyPressESC = e => {
    const { onClick } = this.props;
    if (e.keyCode !== 'Escape') {
      onClick();
    }
  };

  render() {
    const { onClick, children } = this.props;
    return (
      <div className="Overlay" onClick={onClick} role="presentation">
        <div className="Modal">{children}</div>
      </div>
    );
  }
}
