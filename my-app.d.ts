import { LitElement } from "lit-element";
import "./components/app-link/app-link";
import "./components/app-main/app-main";
import './pages/home';
import './pages/notfound';
declare class App extends LitElement {
    route: string;
    params: {};
    query: {};
    data: {};
    static get routes(): ({
        name: string;
        pattern: string;
        data: {
            title: string;
        };
    } | {
        name: string;
        pattern: string;
        data?: undefined;
    })[];
    router(route: string, params: object, query: object, data: object): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-app': App;
    }
}
export {};
//# sourceMappingURL=my-app.d.ts.map