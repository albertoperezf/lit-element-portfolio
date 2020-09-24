import { LitElement } from 'lit-element';
import './section/section';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyContent extends LitElement {
    static styles: import("lit-element").CSSResult;
    static description: string;
    name: string;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-content': MyContent;
    }
}
//# sourceMappingURL=content.d.ts.map