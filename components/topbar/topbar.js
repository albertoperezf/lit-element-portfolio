var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import { query } from 'lit-element/lib/decorators.js';
import '../links/links';
import '../link/link';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let TopBar = class TopBar extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'Alberto Perez';
        this.imgSrc = 'https://picsum.photos/60/60?grayscale';
    }
    render() {
        return html `
          <div class="wrapper" id="wrapper">
            <div class="images">
                <img class="image" id="img" src="${this.imgSrc}" alt="">
            </div>
                
            <my-links class="links">
                <my-link class="link" slot="one" title="Github" url="https://github.com/albertoperezf"></my-link>
                <my-link class="link" slot="two" title="StackOverflow" url="https://stackoverflow.com/users/6450931/alberto-perez"></my-link>
                <my-link class="link" slot="three" title="LinkedIn" url="https://www.linkedin.com/in/albertojpf/"></my-link>
            </my-links>
          </div>
    `;
    }
    foo() {
        return 'foo';
    }
};
TopBar.styles = css `
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        height: 60px;
        background-image: linear-gradient(to right, #b5cc2d, #72b89b 100%);
        font-family: 'Roboto', sans-serif;
    }
    
    .wrapper {
        display: flex;
        flex-direction: row;
        width: 100%
    }
    
    .images {
        display: flex;
        width: 30%;
        padding-left: 20px;
        justify-content: flex-start;
        align-item: center;
        margin: 10px;
    }
    
    .image {
        display: flex;
        flex-direction: row;
        border-radius: 50%;
    }
    
    .links {
        display: flex;
        flex-direction: row;
        width: 70%;
        justify-content: flex-end;
        align-item: center;
    }
    
    .link {
        color: white;
        margin-right: 10px;
    }
  `;
__decorate([
    query('#wrapper')
], TopBar.prototype, "_wrapper", void 0);
__decorate([
    property({ type: String })
], TopBar.prototype, "name", void 0);
__decorate([
    property({ type: String })
], TopBar.prototype, "imgSrc", void 0);
TopBar = __decorate([
    customElement('top-bar')
], TopBar);
export { TopBar };
//# sourceMappingURL=topbar.js.map