import React, { Component } from 'react';

import styles from './layouts.module.scss';

class LayoutDefault extends Component {
  render() {
    return (
      <div className={styles.default}>
        { this.props.children }
      </div>
    );
  }
}

export default LayoutDefault;
