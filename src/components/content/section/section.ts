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

import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-section')
export class MySection extends LitElement {
    static styles = css`

  `;

    @property({ type: String }) title = '';

    render() {
        return html`<div>
            <h1>${this.title}</h1>
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-section': MySection;
    }
}
