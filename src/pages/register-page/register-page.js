import { LitElement, html, css } from 'lit';
import '../../components/register-form/register-form.js';

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
      <register-form></register-form>
      <a href="/login">login</a>
    `;
  }
}
customElements.define('register-page', RegisterPage);
