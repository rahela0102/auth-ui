import { css } from 'lit';

export const inputStyles = css`
  :host {
    margin-bottom: 24px;
  }
  ::slotted(input) {
    padding: 8px;
    border-radius: 3px;
    border: 1px solid rgb(123, 133, 143);
  }

  ::slotted(lion-validation-feedback) {
    color: #de2e21;
    font-size: 14px;
    margin-top: 5px;
    display: block;
  }

  ::slotted(input:focus-visible) {
    outline-color: #ff6200;
  }

  ::slotted(label) {
    margin-bottom: 4px;
    display: block;
  }
`;
