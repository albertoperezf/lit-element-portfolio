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
let MySection = class MySection extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.description = '';
        this.list = [];
    }
    render() {
        return html `<div class="wrapper">
            <h1 class="title">${this.title}</h1>
            
            ${this.description
            ? html `<p class="description">${this.description}</p>`
            : html ``}
            
            <ul class="list">
                ${this.list.length !== 0
            ? this.list.map(item => html `<li class="list-item">${item}</li>`)
            : html ``}
            </ul>        
            
            <slot></slot>    
        </div>`;
    }
};
MySection.styles = css `
        :host {
            display: flex;
            flex-direction: column; 
        }    
    `;
__decorate([
    property({ type: String })
], MySection.prototype, "title", void 0);
__decorate([
    property({ type: String })
], MySection.prototype, "description", void 0);
__decorate([
    property({ type: Array })
], MySection.prototype, "list", void 0);
MySection = __decorate([
    customElement('my-section')
], MySection);
export { MySection };
//# sourceMappingURL=section.js.map