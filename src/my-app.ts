import { LitElement, html, customElement, property } from "lit-element";
import { router } from "lit-element-router";
import "./components/app-link/app-link";
import "./components/app-main/app-main";

@customElement('my-app')
@router
class App extends LitElement {
  @property({ type: String }) route = '';
  @property({ type: Object }) params = {};
  @property({ type: Object }) query = {};
  @property({ type: Object }) data = {};

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

  router(route: string, params: object, query: object, data: object) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;

    console.log(route, params, query, data);
  }

  render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': App;
  }
}