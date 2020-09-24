var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from 'lit-element';
import { registerTranslateConfig } from "lit-translate";
import '../content/content';
import '../footer/footer';
import './section/section';
import '../topbar/topbar';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyWrapper = class MyWrapper extends LitElement {
    constructor() {
        super(...arguments);
        this.init = registerTranslateConfig({
            loader: () => fetch(`../../assets/i18n/en.json`).then(res => res.json())
        });
    }
    render() {
        return html `<div class="wrapper">
            ${this.init}

            <top-bar></top-bar>

            <my-content></my-content>

            <my-footer></my-footer>
        </div>`;
    }
};
MyWrapper.styles = css `
    :host {
        
    }
    `;
MyWrapper = __decorate([
    customElement('my-wrapper')
], MyWrapper);
export { MyWrapper };
//# sourceMappingURL=wrapper.js.map