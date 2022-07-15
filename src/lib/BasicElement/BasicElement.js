import { renderToString } from 'react-dom/server';
import { Button } from './Button';
import { EmptyStickyButton } from './StickyButton';

export class BasicElement {
  constructor({ type, children, ...props }) {
    this.type = type;
    this.children = children;
    this.props = props;
  }

  render() {
    if (this.type === undefined) return <></>;

    const JSX = getJSX(this.type);
    if (JSX === null) return <></>;

    return (
      <JSX type={this.type} {...this.props}>
        {this.children}
      </JSX>
    );
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
