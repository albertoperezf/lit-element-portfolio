import { LitElement } from 'lit-element';
import '../content/content';
import '../footer/footer';
import './section/section';
import '../topbar/topbar';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyWrapper extends LitElement {
    static styles: import("lit-element").CSSResult;
    private init;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-wrapper': MyWrapper;
    }
}
//# sourceMappingURL=wrapper.d.ts.map