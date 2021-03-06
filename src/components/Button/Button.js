import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  a11y: PropTypes.bool,
  type: PropTypes.string,
  href: PropTypes.string,
};

const defaultProps = {
  color: 'primary',
  size: 'default',
  type: 'button',
  disabled: false,
  a11y: false,
};

export default class Button extends Component {
  getClassNames() {
    const {
      color,
      size,
      disabled,
      a11y,
    } = this.props;

    let propClassNames = {};

    // [element] is a key which resolves to a class
    propClassNames[styles[color]] = true;
    propClassNames[styles[size]] = true;

    // element is a single optional class
    propClassNames[styles.disabled] = disabled;
    propClassNames[styles.a11y] = a11y;

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
      //className: classNames(this.getClassNames(), styles[className]),
      className: classNames(this.getClassNames(), className),
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
