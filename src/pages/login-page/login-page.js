import { LitElement, html } from 'lit';
import '../../components/login-form/login-form.js';
import { styles } from './styles.js';

class LoginPage extends LitElement {
  static styles = [styles];

  render() {
    return html`<div class="container">
      <div class="main-content">
        <h1 class="title">Login</h1>
        <p class="subtitle">
          Enter your email address and password to sign in.
        </p>
        <login-form></login-form>
        <div class="create-account-text">
          Don't have an account yet? <a href="/register">Create Account</a>
        </div>
      </div>
    </div>`;
  }
}
customElements.define('login-page', LoginPage);
