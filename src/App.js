import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Projects from './components/projects/Projects';

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
        <Projects projects={this.state.projects}/>
      </LayoutDefault>
    );
  }

}

export default App;
