import { Router } from '@vaadin/router';
import { LitElement, html, css } from 'lit';
import { authService } from '../../services/auth-service';

class UserDetailsPage extends LitElement {
  static properties = {
    __authUser: { type: Object },
  };

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
    this.__authUser = authService.getAuthUser();

    if (!this.__authUser) {
      Router.go('/login');
    }
  }

  __logout() {
    authService.logout();
    Router.go('/login');
  }

  render() {
    return html`
      <h1>User details</h1>
      <p>${this.__authUser.firstName}</p>
      <action-button @click=${this.__logout}>Logout</action-button>
    `;
  }
}

customElements.define('user-details-page', UserDetailsPage);
