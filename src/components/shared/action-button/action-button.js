import { LionButton } from '@lion/ui/button.js';
import { css } from 'lit';

class ActionButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* your styles here */
      `,
    ];
  }
}

customElements.define('action-button', ActionButton);
