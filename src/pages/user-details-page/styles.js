import { css } from 'lit';

export const styles = css`
  .container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: auto;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 140px;
  }

  .card-wrapper {
    position: relative;
  }

  action-button {
    width: 260px;
    background-color: #ff6200;
    color: #fff;
    padding: 0.75rem;
    border-radius: 3rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -15px;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
  }

  .card {
    border: 1px solid #ff6200;
    width: 350px;
    border-radius: 20px;
    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
    height: 0;
    padding-top: 100px;
    overflow: hidden;
  }

  .card:hover {
    height: 300px;
  }

  .card-wrapper .image-container {
    position: absolute;
    left: 50%;
    top: -100px;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transition: 0.5s;
  }

  .card-wrapper .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card:hover + .image-container {
    width: 200px;
    height: 200px;
  }

  .card-content {
    padding: 20px;
  }
  .card-content p {
    color: #ff6200;
    padding: 5px;
    border-bottom: 1px solid #f9ddcc;
  }

  .card-content p span {
    color: black;
  }
`;
