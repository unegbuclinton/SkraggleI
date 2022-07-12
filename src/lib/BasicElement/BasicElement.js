import { renderToString } from 'react-dom/server';
import { Button } from "./Button";

export class BasicElement {
    constructor({ name, type, style = {}, children, href, icon = {} }) {
        this.name = name;
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
        }
        return <JSX {...props} children={this.children} />
    }

    toString() {
        return renderToString(this.render());
    }
}

const getJSX = (type) => {
    switch (type) {
        case 'button':
            return Button;
        default:
            return null;
    }
} 