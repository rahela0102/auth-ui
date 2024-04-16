import { LionInput } from '@lion/ui/input.js';
import { css } from 'lit';

class InputComponent extends LionInput {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* your styles here */
      `,
    ];
  }
}

customElements.define('input-component', InputComponent);
