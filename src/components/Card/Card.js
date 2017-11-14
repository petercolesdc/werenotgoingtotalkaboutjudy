import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

    const bkImage = {
      backgroundImage: `url(${this.props.imageURL})`
    }

    const props = {
      //className: classNames(this.getClassNames(), styles[className] ),
      className: classNames(this.getClassNames(), className),
      style: bkImage,
    }

    return React.createElement(element,props,(
      <div>
        <div className={styles.header}>
          <span className={classNames(styles.meta, "kernLoose")}>{this.props.meta}</span>
        </div>
        <div className={styles.body}>
          <h2 className={classNames(styles.headingText, "typeXL")}>{this.props.title}</h2>
          <p className={classNames(styles.excerpt, "typeS")}>{this.props.excerpt}
            <a href={this.props.href} className={styles.cta}>Read on</a>
          </p>
        </div>
      </div>
      )
    )
  }
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
