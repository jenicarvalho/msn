import styled from 'styled-components';

export const Container = styled.div`
  width: 8rem;
  height: 8.5rem;
  background: linear-gradient(0deg, #CBE8F3 0%, #DCDCDC 50%, #4DBAEC 100%);
  border-radius: 50% / 10% ;

  position: relative;

  border-top: 1px solid #FFF;
  border-bottom: 1px solid var(--lightBlue);

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    bottom: 10%;
    right: -5%;
    left: -5%;
    background: inherit;
    border-radius: 5% / 50%;

    border-left: 1px solid #FFF;
    border-right: 1px solid var(--lightBlue);

  } 

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 7rem;
    border-radius: 5px;
    border: 1px solid #696969;
  }
`;
