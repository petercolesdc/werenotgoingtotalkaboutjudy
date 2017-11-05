import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './card.module.scss';
import Button from '../Button/Button';

const propTypes = {
  cardType: PropTypes.string,
};

const defaultProps = {
  cardType: 'card',
};

export default class Card extends Component {
  getClassNames() {
    const {
      cardType,
    } = this.props;

    let propClassNames = {};
    propClassNames[styles[cardType]] = true;
    return propClassNames;
  }

  render() {
    const {
      className,
    } = this.props;

    const element = 'div';
    const props = {
      className: classNames(this.getClassNames(), styles[className] ),
    }

    return React.createElement(element,props,(
        <div className={styles.body}>
          <p className={classNames(styles.bodyText, "typeMe")}>{this.props.children}</p>
          <Button className={styles.elementButton} size="small">{this.props.buttonLabel}</Button>
        </div>
      )
    )
  }
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
