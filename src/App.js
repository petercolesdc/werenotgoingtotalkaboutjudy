import React, { Component } from 'react';
import LayoutDefault from './layouts/Default';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import './layouts/guide.scss'

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
    <div className="buttonStack">
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
      meta={element.meta}
      imageURL={element.imageURL}
      href={element.href}
      excerpt={element.excerpt}
    >
    </Card>
  );
  return (
    <div className="cardStack">
      { card }
    </div>
  );
}

const cards = [
  {
    id: 1,
    title: "Stranger Things: The sound of the Upside Down",
    meta: "Article",
    controlClass: "elementCard",
    imageURL: "https://source.unsplash.com/350x300/?technology",
    href: "foo",
    excerpt: "Add beautiful text and artwork over Unsplash photos in Over's incredibly powerful editor."
  },
  {
    id: 2,
    title: "The sound of the Upside Down",
    meta: "Article",
    controlClass: "elementCard",
    imageURL: "https://source.unsplash.com/350x300/?nature",
    href: "foo",
    excerpt: "Add beautiful text and artwork over Unsplash photos in Over's incredibly powerful editor."
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
        </section>
        <section className="section sectionPBoth">
          <h1 className="typeMasthead typeMasthead_trailer">TypeBase</h1>
          <div className="typebase">
            <p>The most egregious case of text widows occur in headings, where terminating words are often left dangling on a new line. There are solutions for this: FitText is a JQuery plugin that resizes text dynamically as the browser resizes; Chris Coyier’s technique inserts non-breaking spaces, and there are also SVG solutions. My personal preference is to use vw units to fit heading text on a single line, although this often requires some calculation and experimentation; I hope to create a “FitterText” script in the near future that can apply the correct vw measurement once to text elements, with no recalculation-on-viewport-resize required.</p>
            <p>Support for widows and orphans is very good: as of this writing, Firefox lacks any awareness of the properties, but all other modern browser versions have excellent support. As such, the properties should be considered progressive enhancement for a site: finishing touches that are great to have and are well-appreciated by users, but not super-critical for page content.</p>
          </div>
        </section>
      </LayoutDefault>
    )
  }
}

export default App;
