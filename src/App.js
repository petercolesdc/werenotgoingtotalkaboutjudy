import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';

class App extends Component {

  render() {
    return (
      <LayoutDefault>
        <Button color="secondary" className="button" href="foo" title="anchor">Anchor</Button>
        <Button color="primary" className="button" size="small">Button</Button>
        <Button className="button" size="large" disabled>Button</Button>
      </LayoutDefault>
    )
  }
}

export default App;
