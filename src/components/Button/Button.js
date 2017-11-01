import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import styles from './button.module.scss';


class Button extends Component {
  render() {
    const {
      asClass,
    } = this.props;
    return (
      <button className={`
        ${asClass}`
      }></button>
    )
  }
}

export default Button;
