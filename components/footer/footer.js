var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyFooter = class MyFooter extends LitElement {
    title() {
        return html `<h1>® Alberto Perez, 2020</h1>`;
    }
    slot() {
        return html `<slot name="one-footer"></slot>`;
    }
    render() {
        return html `
            ${this.slot()}
      
            ${this.title()}
        `;
    }
};
MyFooter.styles = css `
    :host {
      display: flex;
      flex-direction: row;
      border: solid 2px gray;
      height: 80px;
      max-width: 100%;
    }
  `;
MyFooter = __decorate([
    customElement('my-footer')
], MyFooter);
export { MyFooter };
//# sourceMappingURL=footer.js.map