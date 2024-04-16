import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import '@lion/ui/define/lion-form.js';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
import { Required } from '@lion/ui/form-core.js';
import '../shared/submit-button/submit-buttont.js';
import '../shared/input-email/input-email.js';
import '../shared/input-text/input-text.js';
import { authService } from '../../services/auth-service.js';

class RegisterForm extends LitElement {
  static properties = {
    error: { type: String },
  };

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
      this.error = error.message;
    }
  }

  render() {
    return html` <lion-form @submit="${this.__register}">
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
        <div>${this.error}</div>
        <submit-button>Register</submit-button>
      </form>
    </lion-form>`;
  }
}

customElements.define('register-form', RegisterForm);
