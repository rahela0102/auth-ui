import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';
import '@lion/ui/define/lion-form.js';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
import { Required } from '@lion/ui/form-core.js';
import '../shared/submit-button/submit-button.js';
import '../shared/input-email/input-email.js';
import '../shared/input-text/input-text.js';
import { authService } from '../../services/auth-service.js';

class RegisterForm extends LitElement {
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

  __register(ev) {
    if (ev.target.hasFeedbackFor?.includes('error')) {
      return;
    }

    try {
      authService.register(ev.target.serializedValue);
      Router.go('/user-details');
    } catch (error) {
      this.__error = error.message;
    }
  }

  render() {
    return html` <lion-form @submit="${this.__register}">
      <div class="form-error">${this.__error}</div>

      <form>
        <input-text
          name="firstName"
          label="First Name"
          .validators="${[new Required()]}"
        ></input-text>
        <input-text
          name="lastName"
          label="Last Name"
          .validators="${[new Required()]}"
        ></input-text>
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
        <submit-button>Register</submit-button>
      </form>
    </lion-form>`;
  }
}

customElements.define('register-form', RegisterForm);
