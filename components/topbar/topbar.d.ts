import { LitElement } from 'lit-element';
import '../links/links';
import '../link/link';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class TopBar extends LitElement {
    static styles: import("lit-element").CSSResult;
    name: string;
    imgSrc: string;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'top-bar': TopBar;
    }
}
//# sourceMappingURL=topbar.d.ts.map