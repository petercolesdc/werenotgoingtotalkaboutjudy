import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Projects from './components/projects/Projects';
import CubeMask from './components/svgcube/CubeMask';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState(
        {
          projects: [
          {
            title: 'Business website',
            category: 'Web design'
          },
          {
            title: 'Social app',
            category: 'Mobile dev'
          },
          {
            title: 'Ecommerce cart',
            category: 'Web development'
          }
        ]
      }
    );
  }


  render() {
    return (
      <LayoutDefault>
        <CubeMask />
        <Projects projects={this.state.projects}/>
      </LayoutDefault>
    );
  }

}

export default App;
