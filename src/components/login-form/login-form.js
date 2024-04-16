import { LitElement, css, html } from 'lit';
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

  static styles = [
    css`
      .form-error {
        font-size: 14px;
        margin-bottom: 20px;
        color: #de2e21;
        font-weight: 600;
      }
    `,
  ];

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
      <div class="form-error">${this.__error}</div>
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
        <submit-button>Login</submit-button>
      </form>
    </lion-form>`;
  }
}

customElements.define('login-form', LoginForm);
