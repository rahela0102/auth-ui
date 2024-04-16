import { LionInput } from '@lion/ui/input.js';
import { inputStyles } from '../styles/input-styles.js';

class InputText extends LionInput {
  static get styles() {
    return [...super.styles, inputStyles];
  }
}

customElements.define('input-text', InputText);
