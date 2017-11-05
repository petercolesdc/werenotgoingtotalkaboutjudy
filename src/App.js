import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';

class App extends Component {

  render() {
    return (
      <LayoutDefault>
        <h1 className="typeMasthead typeMasthead_trailer">Buttons</h1>
        <Button className="elementButton" color="secondary" href="foo" title="anchor">Anchor</Button>
        <Button className="elementButton" color="primary" size="large">Button</Button>
        <Button className="elementButton" size="small" disabled>Small button</Button>
      </LayoutDefault>
    )
  }
}

export default App;
