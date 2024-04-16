import { Router } from '@vaadin/router';
import { LitElement, html } from 'lit';
import { authService } from '../../services/auth-service.js';
import { styles } from './styles.js';

class UserDetailsPage extends LitElement {
  static properties = {
    __authUser: { type: Object },
  };

  static styles = [styles];

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
      <div class="container">
        <h1>User details</h1>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-content">
              <p>First Name:<span>${this.__authUser.firstName}</span></p>
              <p>Last Name: <span>${this.__authUser.lastName}</span></p>
              <p>Email: <span>${this.__authUser.email}</span></p>
            </div>
            <action-button @click=${this.__logout}>Logout</action-button>
          </div>
          <div class="image-container">
            <img src="../../../assets/images/profile.webp" alt="profile-img" />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('user-details-page', UserDetailsPage);
