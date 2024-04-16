import { css } from 'lit';

export const styles = css`
  .container {
    max-width: 1200px;
    margin: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    max-width: 500px;
    border-radius: 10px;
    width: 100%;
    padding: 20px 30px;
    border: 1px solid #ff6200;
  }

  .create-account-text {
    margin-top: 40px;
  }

  .create-account-text a {
    color: #de2e21;
    text-decoration: none;
    font-weight: 600;
  }

  h1.title {
    margin-bottom: 10px;
  }

  p.subtitle {
    margin-bottom: 30px;
  }
`;
