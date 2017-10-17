import React, { Component } from 'react';

import styles from './projects.module.scss';


class ProjectItem extends Component {
  render() {
    //console.log(this.props);
    return (
      <li className={styles.project}>
        <strong className={styles.title}>{this.props.project.title}:</strong>
        {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
