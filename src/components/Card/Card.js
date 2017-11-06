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
        <div>
          <img className={styles.image} src={this.props.imageURL} alt={this.props.altTag}/>
          <div className={styles.body}>
            <h2 className={classNames(styles.headingText, "typeL")}>{this.props.title}</h2>
            <p className={classNames(styles.bodyText, "typeMe")}>{this.props.excerpt}</p>
            <Button className={styles.elementButton} size="small">{this.props.buttonLabel}</Button>
          </div>
        </div>
      )
    )
  }
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
