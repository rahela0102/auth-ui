import { LitElement, html } from 'lit';
import '../shared/input-email/input-email.js';
import '../shared/input-text/input-text.js';
import '../shared/submit-button/submit-button.js';
import '@lion/ui/define/lion-form.js';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
import { Required } from '@lion/ui/form-core.js';
import { Router } from '@vaadin/router';
import { authService } from '../../services/auth-service.js';

class LoginForm extends LitElement {
  static properties = {
    __error: { type: String },
  };

  constructor() {
    super();
    loadDefaultFeedbackMessages();
  }

  __login(ev) {
    if (ev.target.hasFeedbackFor?.includes('error')) {
      return;
    }

    const data = ev.target.serializedValue;

    try {
      authService.login(data);
      Router.go('/user-details');
    } catch (error) {
      this.__error = error.message;
    }
  }

  render() {
    return html`<lion-form @submit=${this.__login}>
      <form>
        <input-email
          name="email"
          label="Email"
          .validators="${[new Required()]}"
        ></input-email>
        <input-text
          name="password"
          label="Password"
          type="password"
          .validators="${[new Required()]}"
        ></input-text>
        <div>${this.__error}</div>
        <submit-button>Login</submit-button>
      </form>
    </lion-form>`;
  }
}

customElements.define('login-form', LoginForm);
