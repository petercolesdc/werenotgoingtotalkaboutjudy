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
      <div className={styles.projects}>
        <h3 className="typeXL typeXL_trailer typeHeading">Latest projects</h3>
        <ul className={styles.list}>
          { projectItems }
        </ul>
    </div>
    );
  }
}

export default Projects;
