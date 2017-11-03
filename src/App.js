import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';

class App extends Component {

  render() {
    return (
      <LayoutDefault>
        <h1 className="typeMasthead typeMasthead_trailer">Buttons</h1>
        <Button color="secondary" className="button" href="foo" title="anchor">Anchor</Button>
        <Button color="primary" className="button" size="large">Button</Button>
        <Button className="button" size="small" disabled>Button</Button>
      </LayoutDefault>
    )
  }
}

export default App;
