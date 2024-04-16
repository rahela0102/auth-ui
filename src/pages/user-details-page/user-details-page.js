import { LitElement, html, css } from 'lit';

class UserDetailsPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h1>User details</h1>
      <p>details works</p>`;
  }
}

customElements.define('user-details-page', UserDetailsPage);
