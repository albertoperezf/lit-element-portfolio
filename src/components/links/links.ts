import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * Links element - Access a list of List Items
 */
@customElement('my-links')
export class MyLinks extends LitElement {
    static styles = css`
        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    `;

    @property({ type: String }) class: string = '';

    render() {
        return html`
      <ul class="${this.class}">
        <slot name="one"></slot>
        <slot name="two"></slot>
        <slot name="three"></slot>
      </ul>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-links': MyLinks;
    }
}
