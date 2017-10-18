import React, { Component } from 'react';

import styles from './cubemask.module.scss';

function Cube(props) {
	const imagesrc = require('../../images/' + props.image)
  return (
			<img className={styles.image} src={imagesrc} alt={"Image of " + props.label} />
	)
}

function Glitch(props) {
  return (
    <h1 className={styles.glitch} data-word={props.title}>{props.title}</h1>
  )
}

class CubeMask extends Component {
  render() {
    return (
      <div className={styles.vr}>
        <div className={styles.container}>
          <div className={styles.cube}>
            <div className={styles.blend}>
                <Cube
                  className={styles.image}
                  image="cubeMask1.jpg"
                  label="Cube"
                />
            </div>
          </div>
          <Glitch
            title="Interactive apps"
          />
        </div>
      </div>
    )
  }
}

export default CubeMask;
