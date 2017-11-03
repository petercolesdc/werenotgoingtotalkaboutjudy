import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const ROLES = [
  'primary',
  'secondary',
  'transactional'
];

const SIZES = [
  'small',
  'default',
  'large'
];

const propTypes = {
  color: PropTypes.oneOf(ROLES),
  size: PropTypes.oneOf(SIZES),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  href: PropTypes.string,
};

const defaultProps = {
  color: 'primary',
  size: 'default',
  disabled: false,
  type: 'button',
};

export default class Button extends Component {
  getClassNames() {
    const {
      color,
      size,
      disabled,
    } = this.props;

    let propClassNames = {};

    // [element] is a key which resolves to a css class
    propClassNames[styles[color]] = true;
    propClassNames[styles[size]] = true;

    // element is a single css class
    propClassNames[styles.disabled] = disabled;

    return propClassNames;
  }

  render() {
    const {
      href,
      type,
      title,
      children,
      className, // Passed as a prop when button is created
    } = this.props;

    const element = href ? 'a' : 'button';  // Is it button or is it anchor?

    const props = {
      href,
      title,
      className: classNames(this.getClassNames(), styles[className]),
      type: !href ? type : null,
    }
    
    return React.createElement(
      element,
      props,
      children,
    );
  }
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
