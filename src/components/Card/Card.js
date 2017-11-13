import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './card.module.scss';

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
      //className: classNames(this.getClassNames(), styles[className] ),
      className: classNames(this.getClassNames(), className),
    }

    return React.createElement(element,props,(
        <div className={styles.container}>
          <img className={styles.image} src={this.props.imageURL} alt={this.props.altTag}/>
          <div className={styles.body}>
            <h2 className={classNames(styles.headingText, "typeM")}>{this.props.title}</h2>
            <p className={classNames(styles.bodyText, "typeS")}>{this.props.excerpt}</p>
            <Button a11y href={this.props.buttonHref} title="More details" className={styles.button}><span>{this.props.buttonLabel}</span></Button>
          </div>
        </div>
      )
    )
  }
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
