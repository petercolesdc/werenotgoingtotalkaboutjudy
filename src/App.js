import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

class App extends Component {

  render() {
    return (
      <LayoutDefault>
        <h1 className="typeMasthead typeMasthead_trailer">Buttons</h1>
        <Button className="elementButton" color="secondary" href="foo" title="anchor">Anchor</Button>
        <Button className="elementButton" size="large">Button</Button>
        <Button className="elementButton" size="small" disabled>Small button</Button>
        <Button className="elementButton" a11y href="foo" title="Aria short label"><span>Aria full buton label</span></Button>
        <Card buttonLabel="Button">
          All Hover.css effects make use of a single element (with the help of some pseudo-elements where necessary), are self contained so you can easily copy and paste them, and come in CSS, Sass, and LESS flavours.
        </Card>
      </LayoutDefault>
    )
  }
}

export default App;
