import { LionButton } from '@lion/ui/button.js';
import { css } from 'lit';

class ButtonComponent extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* your styles here */
      `,
    ];
  }
}
customElements.define('button-component', ButtonComponent);
