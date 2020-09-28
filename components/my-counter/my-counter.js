var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from "lit-element";
import { connect } from 'lit-element-redux';
import operations from './duck/operations';
const mapStateToProps = store => ({
    counter: store.counter
});
const mapDispatchToProps = Object.assign({}, operations);
class MyCounter extends LitElement {
    constructor() {
        super(...arguments);
        this.counter = 0;
    }
    render() {
        return html `
      <h1>Counter: ${this.counter}</h1>
      <button @click="${this.increment}">Increment</button>
      <button @click="${this.decrement}">Decrement</button>
    `;
    }
}
__decorate([
    property({ type: Number })
], MyCounter.prototype, "counter", void 0);
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(MyCounter);
customElements.define('my-counter', ConnectedCounter);
//# sourceMappingURL=my-counter.js.map