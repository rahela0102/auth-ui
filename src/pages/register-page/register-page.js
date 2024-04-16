import { LitElement, html, css } from 'lit';
import '../../components/register-form/register-form.js';
import { styles } from './styles.js';

class RegisterPage extends LitElement {
  static styles = [styles];

  render() {
    return html`<div class="container">
      <div class="main-content">
        <h1 class="title">Register</h1>
        <p class="subtitle">Enter below your personal information</p>
        <register-form></register-form>
        <div class="create-account-text">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>`;
  }
}
customElements.define('register-page', RegisterPage);
