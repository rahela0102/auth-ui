import { LionInputEmail } from '@lion/ui/input-email.js';
import { inputStyles } from '../styles/input-styles.js';

class InputEmail extends LionInputEmail {
  static get styles() {
    return [...super.styles, inputStyles];
  }
}

customElements.define('input-email', InputEmail);
