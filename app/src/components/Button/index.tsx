import React from 'react';

import { Container } from './styles';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  icon?: string,
  iconPosition?: string
  version?: string,
  onClick?: any
}

const Button = ({children, icon, iconPosition, version, onClick}: Props) => {

  return (
    <Container version={version} onClick={onClick}>
      { iconPosition === 'left' && <span>{icon}</span>}

      {children}
      
      { (iconPosition === 'right' || iconPosition === undefined) && <span>{icon}</span>}
    </Container>
  );
}

export default Button;