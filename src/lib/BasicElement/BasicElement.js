import { renderToString } from 'react-dom/server';
import { Button } from './Button';
import { EmptyStickyButton } from './StickyButton';

export class BasicElement {
  constructor({ type, style = {}, children, href, icon = {} }) {
    this.type = type;
    this.style = style;
    this.href = href;
    this.icon = icon;
    this.children = children;
  }

  render() {
    if (this.type === undefined) return <></>;

    const JSX = getJSX(this.type);
    if (JSX === null) return <></>;

    const props = {
      style: this.style,
      href: this.href
    };
    return <JSX {...props}>{this.children}</JSX>;
  }

  toString() {
    return renderToString(this.render());
  }
}

const getJSX = (type) => {
  switch (type) {
    case 'button':
      return Button;
    case 'sticky-button':
      return EmptyStickyButton;
    default:
      return null;
  }
};
