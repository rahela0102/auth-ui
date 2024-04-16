import { LionInput } from '@lion/ui/input.js';
import { css } from 'lit';

class InputText extends LionInput {
  static get styles() {
    return [
      ...super.styles,
      css`
        /* your styles here */
      `,
    ];
  }
}

customElements.define('input-text', InputText);
