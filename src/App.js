import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';

class App extends Component {

  render() {
    return (
      <LayoutDefault>
        <h1 className="typeMasthead typeMasthead_trailer">Buttons</h1>
        <Button color="secondary" href="foo" title="anchor">Anchor</Button>
        <Button color="primary" size="large">Button</Button>
        <Button size="small" disabled>Small button</Button>
      </LayoutDefault>
    )
  }
}

export default App;
