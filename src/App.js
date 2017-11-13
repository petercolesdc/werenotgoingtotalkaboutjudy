import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import stylesTest from './layouts/test.module.scss'

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
    <div className="Styles_ButtonStack">
      { button }
    </div>
  );
}

function DmCard(props) {
  const card = props.cards.map((element) =>
    <Card
      key={element.id}
      className={element.controlClass}
      title={element.title}
      imageURL={element.imageURL}
      altTag={element.altTag}
      buttonHref={element.buttonHref}
      buttonLabel={element.buttonLabel}
      excerpt={element.excerpt}
    >
    </Card>
  );
  return (
    <div className="Styles_CardStack">
      { card }
    </div>
  );
}

const cards = [
  {
    id: 1,
    title: "A card",
    controlClass: "elementCard",
    imageURL: "http://via.placeholder.com/350x350",
    altTag: "tag",
    buttonHref: "foobar",
    buttonLabel: "More details about this item",
    excerpt: "This is a short excerpt"
  },
  {
    id: 2,
    title: "Another card",
    controlClass: "elementCard",
    imageURL: "http://via.placeholder.com/350x350",
    altTag: "tag",
    buttonHref: "foobar",
    buttonLabel: "More details about this item",
    excerpt: "This is another short excerpt"
  }
];

const buttons = [
  {
    id: 1,
    label: "Default",
    controlClass: "elementButton",
    a11y: false,
    disabled: false
  },
  {
    id: 2,
    label: "Secondary color",
    controlClass: "elementButton",
    color: "secondary",
    a11y: false,
    disabled: false
  },
  {
    id: 2.1,
    label: "Transaction color",
    controlClass: "elementButton",
    color: "transactional",
    a11y: false,
    disabled: false
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
    disabled: false
  },
  {
    id: 6.1,
    label: "Large button",
    controlClass: "elementButton",
    size: "large",
    a11y: false,
    disabled: false
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
          <h1 className="typeMasthead typeMasthead_trailer">Cards</h1>
          <DmCard
            cards={cards}
          />
          <Card
            className={stylesTest.elementCard}
            title="Inline card with namespaced parent"
            imageURL="http://via.placeholder.com/350x350"
            altTag="tag"
            buttonHref="foobar"
            buttonLabel="More details about this item"
            excerpt="This is another short excerpt"
          />
        </section>
      </LayoutDefault>
    )
  }
}

export default App;
