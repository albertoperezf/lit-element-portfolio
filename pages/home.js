var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";
import '../components/content/content';
import '../components/footer/footer';
import '../components/topbar/topbar';
let Home = class Home extends LitElement {
    render() {
        return html `
            <top-bar></top-bar>

            <my-content></my-content>

            <my-footer></my-footer>
        `;
    }
};
Home.styles = css ``;
Home = __decorate([
    customElement('app-home'),
    navigator
], Home);
export { Home };
//# sourceMappingURL=home.js.map