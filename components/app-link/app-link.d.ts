import { LitElement } from "lit-element";
export declare class Link extends LitElement {
    static styles: import("lit-element").CSSResult;
    href: string;
    render(): import("lit-element").TemplateResult;
    linkClick(event: MouseEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-link': Link;
    }
}
//# sourceMappingURL=app-link.d.ts.map