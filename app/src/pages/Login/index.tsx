import React from 'react';
import Avatar from '../../components/login/Avatar';
import Link from '../../components/login/Link';
import Loginform from '../../components/login/Loginform';
import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Avatar />

      <h1>Entrar</h1>
      <p>
        Entre com seu Windows Live ID. Não possui?<br/>
        <Link href="#">Inscrever-se</Link> 
      </p>
      
      <Loginform />
    </Container>
  )
}

export default Login;