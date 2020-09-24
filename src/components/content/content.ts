import { LitElement, html, customElement, property, css } from 'lit-element';
import './section/section';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-content')
export class MyContent extends LitElement {
    static styles = css`
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

    static description = 'Computer Engineer and Frontend Developer with more than four (4) years of experience working on agile development projects for web applications or mobile web applications using technologies like: HTML5, CSS3, SASS, LESS, PostCSS, Javascript, ES6, React, Angular, Meteor, Babel, Webpack, etc. Currently working on Bankia related projects using React architecture.';

    @property({ type: String }) name: string = 'Alberto Perez Faria';

    render() {
        return html`<div class="wrapper">
            <my-section description="${MyContent.description}" title="Resume" />
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-content': MyContent;
    }
}
