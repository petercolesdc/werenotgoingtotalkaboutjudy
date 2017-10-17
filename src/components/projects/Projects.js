import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

import styles from './projects.module.scss';

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem key={project.title} project={project}/>
        );
      });
    }
    return (
      <ul className={styles.projects}>
        <h3>Latest projects</h3>
        { projectItems }
      </ul>
    );
  }
}

export default Projects;
