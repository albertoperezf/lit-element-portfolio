import { LitElement, customElement, html, css, property } from "lit-element";
import { navigator } from "lit-element-router";

@customElement('app-link')
@navigator
export class Link extends LitElement {
    static styles = css`
        a {
            margin: 5px;
        }
  `;

    @property({ type: String }) href: string = '';

    render() {
        return html`
      <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
    }

    linkClick(event: MouseEvent) {
        event.preventDefault();

        this.navigate(this.href);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-link': Link;
    }
}
