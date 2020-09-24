var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from "lit-element";
import { router } from "lit-element-router";
import "./components/app-link/app-link";
import "./components/app-main/app-main";
let App = class App extends LitElement {
    constructor() {
        super(...arguments);
        this.route = '';
        this.params = {};
        this.query = {};
        this.data = {};
    }
    static get routes() {
        return [
            {
                name: "home",
                pattern: "",
                data: { title: "Home" }
            },
            {
                name: "info",
                pattern: "info"
            },
            {
                name: "user",
                pattern: "user/:id"
            },
            {
                name: "not-found",
                pattern: "*"
            }
        ];
    }
    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
        this.data = data;
        console.log(route, params, query, data);
    }
    render() {
        return html `
      <app-link href="/">Home</app-link>
      <app-link href="/info">Info</app-link>
      <app-link href="/info?data=12345">Info?data=12345</app-link>
      <app-link href="/user/14">user/14</app-link>

      <app-main active-route=${this.route}>
        <h1 route="home">Home</h1>
        <h1 route="info">Info</h1>
        <h1 route="user">User</h1>
        <h1 route="not-found">Not Found</h1>
      </app-main>
    `;
    }
};
__decorate([
    property({ type: String })
], App.prototype, "route", void 0);
__decorate([
    property({ type: Object })
], App.prototype, "params", void 0);
__decorate([
    property({ type: Object })
], App.prototype, "query", void 0);
__decorate([
    property({ type: Object })
], App.prototype, "data", void 0);
App = __decorate([
    customElement('my-app'),
    router
], App);
//# sourceMappingURL=my-app.js.map