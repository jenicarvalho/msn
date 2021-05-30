import React from 'react';
import { Container } from './styles';

interface LinkProps {
  href: string
  children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Container href={href}>{children}</Container>
  )
}

export default Link;