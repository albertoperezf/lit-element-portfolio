var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MyContent_1;
import { LitElement, html, customElement, property, css } from 'lit-element';
import './section/section';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyContent = MyContent_1 = class MyContent extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'Alberto Perez';
    }
    render() {
        return html `<div class="wrapper">
            <my-section description="${MyContent_1.description}" title="Resume" />
        </div>`;
    }
};
MyContent.styles = css `
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        max-width: 100%;
        height: calc(100vh - 60px);
        font-family: 'Roboto', sans-serif;
        margin: 0 10px;
    }
  `;
MyContent.description = 'Computer Engineer and Frontend Developer with more than four (4) years of experience working on agile development projects for web applications or mobile web applications using technologies like: HTML5, CSS3, SASS, LESS, PostCSS, Javascript, ES6, React, Angular, Meteor, Babel, Webpack, etc. Currently working on Bankia related projects using React architecture.';
__decorate([
    property({ type: String })
], MyContent.prototype, "name", void 0);
MyContent = MyContent_1 = __decorate([
    customElement('my-content')
], MyContent);
export { MyContent };
//# sourceMappingURL=content.js.map