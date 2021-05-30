import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, #CBE8F3 0%, #FFF 20%, #FFF 80%, #4DBAEC 100%);
  padding: 2rem 0;

  color: #1C1C1C;

  > h1 {
    margin: 1rem 0;
    font-weight: 400;
    color: #0000CD;
  }

  > p {
    margin-bottom: 1rem; 
    font-size: .9rem;
  }

  button {
    margin-top: 1rem;
    color: inherit;
  }
`;
