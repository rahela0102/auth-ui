import { LionButtonSubmit } from '@lion/ui/button.js';
import { buttonStyles } from '../styles/button-styles.js';

class SubmitButton extends LionButtonSubmit {
  static get styles() {
    return [...super.styles, buttonStyles];
  }
}
customElements.define('submit-button', SubmitButton);
