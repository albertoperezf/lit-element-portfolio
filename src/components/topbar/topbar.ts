import { LitElement, html, customElement, property, css } from 'lit-element';
import '../links/links';
import '../link/link';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('top-bar')
export class TopBar extends LitElement {
    static styles = css`
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
    
    .title {
        color: white; 
        margin: 0 0 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  `;

    @property({ type: String }) name = 'Alberto Perez';
    @property({ type: String }) imgSrc = 'https://picsum.photos/60/60?grayscale';

    render() {
        return html`
          <div class="wrapper" id="wrapper">
            <div class="images">
                <img class="image" id="img" src="${this.imgSrc}" alt="">
                
                <p class="title">${this.name}</p>
            </div>
                
            <my-links class="links">
                <my-link class="link" slot="one" title="Github" url="https://github.com/albertoperezf"></my-link>
                <my-link class="link" slot="two" title="StackOverflow" url="https://stackoverflow.com/users/6450931/alberto-perez"></my-link>
                <my-link class="link" slot="three" title="LinkedIn" url="https://www.linkedin.com/in/albertojpf/"></my-link>
            </my-links>
          </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'top-bar': TopBar;
    }
}
