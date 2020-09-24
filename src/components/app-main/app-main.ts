import { LitElement, customElement, html } from "lit-element";
import { outlet } from "lit-element-router";

@customElement('app-main')
@outlet
export class Main extends LitElement {
    render() {
        return html`
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-main': Main;
    }
}