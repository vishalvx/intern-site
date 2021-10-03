import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 70vh;
`;
export const Content = styled.div`
  text-align: center;
  h1 {
    margin-top: 7rem;
    font-size: 4rem;
  }
  p {
    padding: 1rem;
    font-size: var(--fontMed);
  }
`;
export const Button = styled.button`
  background-color: var(--medGray);
  color: var(--white);

  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: var(--fontMed);
  margin: 1rem;
  cursor: pointer;
  :hover {
    transition: 0.7s ease-in-out;
    color: var(--black);
    background-color: var(--medGray);
    box-shadow: rgba(100, 100, 111, 0.473) 0px 7px 29px 0px;
  }
`;
