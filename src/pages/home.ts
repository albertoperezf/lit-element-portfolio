import { LitElement, customElement, html, css, property } from "lit-element";
import { navigator } from "lit-element-router";
import '../components/content/content';
import '../components/footer/footer';
import '../components/topbar/topbar';

@customElement('app-home')
@navigator
export class Home extends LitElement {
    static styles = css``;

    render() {
        return html`
            <top-bar></top-bar>

            <my-content></my-content>

            <my-footer></my-footer>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-home': Home;
    }
}