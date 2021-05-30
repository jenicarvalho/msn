import React from 'react';
import { useForm } from "react-hook-form";
import CheckBox from '../CheckBox';
import InputText from '../InputText';
import { Form } from './styles';
import Link from '../Link'
import Button from '../Button';

const Loginform: React.FC = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <InputText name="email" type="email" placeHolder="Exemplo555@hotmail.com" register={register} required/>

          <InputText name="password" type="password" placeHolder="Insira sua senha" register={register} required/>

          <span>
            Entrar como:
            <select {...register("visibility")}>
              <option value="online">Disponível</option>
              <option value="busy">Ocupado</option>
              <option value="away">Ausente</option>
            </select>  
          </span>
         
          <CheckBox name='rememberEmail' register={register}>
            Lembrar-me
          </CheckBox>

          <CheckBox name='rememberPassword' register={register}>
            Lembrar minha senha
          </CheckBox>

          <CheckBox name='autoLogin' register={register} >
            Entrar automaticamente
          </CheckBox>

          <Link href="#">Esqueceu sua senha?</Link>          
        </div>
        
        <Button>Entrar</Button>
    </Form>
  )
}

export default Loginform;