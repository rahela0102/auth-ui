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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
