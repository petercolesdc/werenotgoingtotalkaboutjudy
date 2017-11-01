import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import styles from './button.module.scss';

class Button extends Component {
  render() {
    return (
      <button className={styles[this.props.className]}>{this.props.children}</button>
    )
  }
};

export default Button;
