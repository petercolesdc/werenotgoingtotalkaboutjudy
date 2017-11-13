import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function DmButton(props) {
  const button = props.buttons.map((element) =>
    <Button
      key={element.id}
      className={element.controlClass}
      color={element.color}
      size={element.size}
      href={element.href}
      title={element.title}
      a11y={element.a11y}
      disabled={element.disabled}
    >
      <span>{ element.label }</span>
    </Button>
  );
  return (
    <div>
      { button }
    </div>
  );
}

const buttons = [
  {
    id: 1,
    label: "Default",
    controlClass: "elementButton",
    a11y: false,
    disabled: false,
  },
  {
    id: 2,
    label: "Secondary color",
    controlClass: "elementButton",
    color: "secondary",
    a11y: false,
    disabled: false,
  },
  {
    id: 3,
    label: "Fully a11y button text",
    title: "a11y short label",
    controlClass: "elementButton",
    a11y: true,
    disabled: false
  },
  {
    id: 4,
    label: "Link button",
    controlClass: "elementButton",
    href: "foo",
    a11y: false,
    disabled: false
  },
  {
    id: 5,
    label: "Disabled button",
    controlClass: "elementButton",
    a11y: false,
    disabled: true
  },
  {
    id: 6,
    label: "Small button",
    controlClass: "elementButton",
    size: "small",
    color: "secondary",
    a11y: false,
    disabled: false,
  },
  {
    id: 7,
    label: "Large button",
    controlClass: "elementButton",
    size: "large",
    a11y: false,
    disabled: false,
  }
];


class App extends Component {
  render() {
    return (
      <LayoutDefault>
        <section className="section sectionPBoth">
          <h1 className="typeMasthead typeMasthead_trailer">Buttons</h1>
          <DmButton
            buttons={buttons}
          />
        </section>
        <section className="section sectionPBoth">
          <Card
            buttonLabel="More details about this"
            buttonHref="foo"
            title="A title"
            imageURL="http://via.placeholder.com/350x350"
            altTag="Image"
          >
          </Card>
          <Card
            buttonLabel="More details about that"
            buttonHref="bar"
            title="Another title"
            imageURL="http://via.placeholder.com/350x350"
            altTag="Image"
          >
          </Card>
        </section>
      </LayoutDefault>
    )
  }
}

export default App;
