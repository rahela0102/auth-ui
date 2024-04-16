import { LionButton } from '@lion/ui/button.js';
import { buttonStyles } from '../styles/button-styles.js';

class ActionButton extends LionButton {
  static get styles() {
    return [...super.styles, buttonStyles];
  }
}

customElements.define('action-button', ActionButton);
