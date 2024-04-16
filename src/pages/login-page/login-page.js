import { LitElement, html, css } from 'lit';

class LoginPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h1>Login</h1>
      <p>This is login.</p>`;
  }
}
customElements.define('login-page', LoginPage);
