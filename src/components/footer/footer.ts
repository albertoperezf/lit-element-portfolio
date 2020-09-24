import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-footer')

export class MyFooter extends LitElement {
    static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      border: solid 2px gray;
      height: 80px;
      max-width: 100%;
    }
  `;

    private title() {
        return html`<h1>® Alberto Perez, 2020</h1>`;
    }

    private slot() {
        return html`<slot name="one-footer"></slot>`;
    }

    render() {
        return html`
            ${this.slot()}
      
            ${this.title()}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-footer': MyFooter;
    }
}
