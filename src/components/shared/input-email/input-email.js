import { LionInputEmail } from '@lion/ui/input-email.js';
import { css } from 'lit';

class InputEmail extends LionInputEmail {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* your styles here */
      `,
    ];
  }
}

customElements.define('input-email', InputEmail);
