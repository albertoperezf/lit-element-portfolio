import { LitElement, html, customElement, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-footer')

export class MyFooter extends LitElement {
    static styles = css`
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

    render() {
        return html`
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
}

declare global {
    interface HTMLElementTagNameMap {
        'my-footer': MyFooter;
    }
}
