import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyFooter extends LitElement {
    static styles: import("lit-element").CSSResult;
    private title;
    private slot;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-footer': MyFooter;
    }
}
//# sourceMappingURL=footer.d.ts.map