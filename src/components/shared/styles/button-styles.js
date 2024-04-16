import { css } from 'lit';

export const buttonStyles = css`
  :host {
    height: 40px;
    width: 100%;
    max-width: 100%;
    background-color: rgb(255, 98, 0);
    border: 2px solid rgb(255, 98, 0);
    color: rgb(255, 255, 255);
    padding: 0 16px;
    justify-content: center;
    cursor: pointer;
  }
  :host(:hover) {
    background-color: rgb(255, 98, 0);
    color: rgb(255, 255, 255);
  }
`;
