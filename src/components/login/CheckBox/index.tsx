import React from 'react';
import { Container } from './styles';

interface CheckBoxProps {
  children: string
  register: (param: string) => void
  name: string
}

const CheckBox: React.FC<CheckBoxProps> = ({ children, register, name }) => {
  return (
    <Container>
      <input {...register(name)} type="checkbox" />
      <label className="form-check-label">{children}</label>
    </Container>
  )
}

export default CheckBox;