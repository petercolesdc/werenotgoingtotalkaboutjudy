import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const ROLES = [
  'primary', 'danger', 'success'
];

const propTypes = {
  color: PropTypes.oneOf(ROLES),
  disabled: PropTypes.bool,
};

const defaultProps = {
  color: 'primary',
  disabled: false,
};

export default class Button extends Component {
  _getClassNames() {
    const {
      color,
      disabled
    } = this.props;

    let propClassNames = {};

    // [color] is a key which resolves to a css class (.default by default)
    propClassNames[styles[color]] = true;

    // .disabled is a css class
    propClassNames[styles.disabled] = disabled;

    return propClassNames;
  }

  render() {
    const {
      className, // Passed as a prop when button is created
    } = this.props;

    return (
      <button className={classNames(this._getClassNames(), styles[className])}>{this.props.children}</button>
    )
  }
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
