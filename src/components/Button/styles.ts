import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.button<Props>`
  border-radius: 12px;
  min-width: 120px;
  height: 40px;
  background-color: ${props => props.version === 'secondary' ? 'var(--orange)' : 'var(--green)' };
  color: #fff;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  transition: background 0.3s ease;

  span {
    margin: 10px;
  }

  &:hover {
    background-color: ${props => props.version === 'secondary' ? 'var(--orange)' : 'var(--darkGreen)' };
  }
`;

export const AlignButton = styled.div<any>`
  margin-top: 30px;
  display: flex;
  justify-content:  ${props => props.justify ? props.justify : 'flex-end' };
`;