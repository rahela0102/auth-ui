import { LitElement, html, css } from 'lit';
import('../../components/login-form/login-form.js');

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
      <login-form></login-form>`;
  }
}
customElements.define('login-page', LoginPage);
