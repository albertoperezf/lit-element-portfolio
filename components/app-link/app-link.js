var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css, property } from "lit-element";
import { navigator } from "lit-element-router";
let Link = class Link extends LitElement {
    constructor() {
        super(...arguments);
        this.href = '';
    }
    render() {
        return html `
      <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
    }
    linkClick(event) {
        event.preventDefault();
        this.navigate(this.href);
    }
};
Link.styles = css `
        a {
            margin: 5px;
        }
  `;
__decorate([
    property({ type: String })
], Link.prototype, "href", void 0);
Link = __decorate([
    customElement('app-link'),
    navigator
], Link);
export { Link };
//# sourceMappingURL=app-link.js.map