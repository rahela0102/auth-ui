import { LionButtonSubmit } from '@lion/ui/button.js';
import { css } from 'lit';

class SubmitButton extends LionButtonSubmit {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* your styles here */
      `,
    ];
  }
}
customElements.define('submit-button', SubmitButton);
