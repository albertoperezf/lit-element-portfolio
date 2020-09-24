var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * Links element - Access a list of List Items
 */
let MyLinks = class MyLinks extends LitElement {
    render() {
        return html `
      <ul class="${this.class}">
        <slot name="one"></slot>
        <slot name="two"></slot>
        <slot name="three"></slot>
      </ul>
    `;
    }
};
MyLinks.styles = css `
        ul {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
  `;
__decorate([
    property({ type: String })
], MyLinks.prototype, "class", void 0);
MyLinks = __decorate([
    customElement('my-links')
], MyLinks);
export { MyLinks };
//# sourceMappingURL=links.js.map