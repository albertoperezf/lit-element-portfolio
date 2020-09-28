import { LitElement, customElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";
import '../components/content/content';
import '../components/footer/footer';
import '../components/topbar/topbar';

@customElement('app-notfound')
@navigator
export class Notfound extends LitElement {
    static styles = css``;

    render() {
        return html`
            <top-bar></top-bar>

            <h1>Not found</h1>

            <my-footer></my-footer>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-notfound': Notfound;
    }
}