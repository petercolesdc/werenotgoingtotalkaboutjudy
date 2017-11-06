import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

class App extends Component {
  render() {

    const cardExcerpt = ["All effects make use of a single element", "With the help of some pseudo-elements", "Can easily copy and paste them"];
    return (
      <LayoutDefault>
        <h1 className="typeMasthead typeMasthead_trailer">Buttons</h1>
        <Button className="elementButton" color="secondary" href="foo" title="anchor">Anchor</Button>
        <Button className="elementButton" size="large">Button</Button>
        <Button className="elementButton" size="small" disabled>Small button</Button>
        <Button className="elementButton" a11y href="foo" title="Aria short label"><span>Aria full buton label</span></Button>
          <Card
            buttonLabel="Button"
            title="A title"
            imageURL="http://via.placeholder.com/350x250"
            altTag="Image"
            excerpt={ cardExcerpt[1] }>
          </Card>
      </LayoutDefault>
    )
  }
}

export default App;
