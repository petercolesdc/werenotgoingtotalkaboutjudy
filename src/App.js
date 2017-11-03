import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';

class App extends Component {

  render() {
    return (
      <LayoutDefault>
        <Button
          color={"secondary"}
          className={"button"}
          href="foo"
        >
        Button</Button>
        <Button
          color={"primary"}
          className={"button"}
        >
        Button</Button>
      </LayoutDefault>
    )
  }
}

export default App;
