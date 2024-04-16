import { LitElement, html, css } from 'lit';

class RegisterPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <h1>Register</h1>
      <p>This is register.</p>
      <a href="/login">login</a>
    `;
  }
}
customElements.define('register-page', RegisterPage);
