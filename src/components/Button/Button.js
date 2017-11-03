import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const ROLES = [
  'primary', 'secondary', 'transactional'
];

const propTypes = {
  color: PropTypes.oneOf(ROLES),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  href: PropTypes.string,
};

const defaultProps = {
  color: 'primary',
  disabled: false,
  type: 'button',
};

export default class Button extends Component {
  getClassNames() {
    const {
      color,
      disabled,
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
      href,
      type,
      children,
      className, // Passed as a prop when button is created
    } = this.props;

    const element = href ? 'a' : 'button';

    const props = {
      href,
      className: classNames(this.getClassNames(), styles[className]),
      type: !href ? type : null,
    }

    //return (
      //<button className={classNames(this.getClassNames(), styles[className])}>{children}</button>
    //)

    return React.createElement(
      element,
      props,
      children,
    );
  }
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
