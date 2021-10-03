import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  label,
  button {
    font-size: var(--fontSmall);
  }
  form {
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding: 0rem 1rem;
  }

  form h1 {
    text-align: center;
    padding: 2rem;
  }
  form input {
    margin: 0.3rem 0;
  }
  form button {
    background-color: var(--blueGreen);
    border: none;
    border-radius: 0.4rem;
    padding: 0.7rem;
    margin: 1rem 0;
    :hover{
      color:var(--white);
      background-color: #31b47b;
      transition: 0.3s ease-in-out;
      box-shadow: var(--level1);
    }
  }
  form .role {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0.3rem;
  }
  form input {
    padding: 0.4rem;
  }

  @media only screen and (max-width: 500px) {
    form {
      width: 70%;
    }
  }
`;
