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
    render() {
        return html `
            <my-links class="links">
                <my-link class="link" slot="one" title="Github" url="https://github.com/albertoperezf"></my-link>
                <my-link class="link" slot="two" title="StackOverflow" url="https://stackoverflow.com/users/6450931/alberto-perez"></my-link>
                <my-link class="link" slot="three" title="LinkedIn" url="https://www.linkedin.com/in/albertojpf/"></my-link>
            </my-links>
      
            <div class="wrapper">
                <h1 class="title">® Alberto Perez, 2020</h1>
            </div>
        `;
    }
};
MyFooter.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      height: 80px;
      max-width: 100%;
      background-image: linear-gradient(to right, #b5cc2d, #72b89b 100%);
      font-family: 'Roboto', sans-serif;
    }
    
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 40%;
    }
    
    .title {
        margin: 0;
        font-family: 'Roboto bold', sans-serif;
        font-size: 14px;
        color: white;
    }
    
    .links {
        height: 60%;
    }
  `;
MyFooter = __decorate([
    customElement('my-footer')
], MyFooter);
export { MyFooter };
//# sourceMappingURL=footer.js.map