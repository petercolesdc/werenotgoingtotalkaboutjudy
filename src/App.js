import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';

class App extends Component {

  render() {
    return (
      <LayoutDefault>
        <Button className="primary">Button</Button>
      </LayoutDefault>
    )
  }
}

export default App;
