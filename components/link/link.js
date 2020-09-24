/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyLink = class MyLink extends LitElement {
    constructor() {
        super(...arguments);
        this.url = '';
        this.title = '';
    }
    render() {
        return html `
            <li><a class="link" href="${this.url}">${this.title}</a></li>
    `;
    }
};
MyLink.styles = css `
        li {
            list-style: none;
        }
        
        .link {
            color: white;
            text-decoration: none;
        }
  `;
__decorate([
    property({ type: String })
], MyLink.prototype, "url", void 0);
__decorate([
    property({ type: String })
], MyLink.prototype, "title", void 0);
MyLink = __decorate([
    customElement('my-link')
], MyLink);
export { MyLink };
//# sourceMappingURL=link.js.map