import { LitElement, html, customElement, property } from "lit-element";
import { router } from "lit-element-router";
import "./components/app-link/app-link";
import "./components/app-main/app-main";
import './pages/home';
import './pages/notfound';

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
        <app-main active-route=${this.route}>
            <app-home route="home" />
      
            <app-notfound route="not-found" />
      </app-main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': App;
  }
}