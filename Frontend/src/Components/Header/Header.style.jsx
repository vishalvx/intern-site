import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: var(--blueGreen);
  a {
    text-decoration: none;
    color: var(--black);
  }
`;
export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const List = styled.div`
  display: flex;

  li {
    list-style: none;
    font-size: var(--fontMed);
    margin: 0 0.5rem;
    /* border-bottom: 2px solid black; */
    border-width: 0%;
    padding-bottom: 2px;
    cursor: pointer;

    :hover {
      border-bottom: 2px solid black;
    }
  }
`;
