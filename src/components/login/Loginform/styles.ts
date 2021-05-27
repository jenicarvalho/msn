import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form {
    width: 20rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #ADD8E6;
    padding: .5rem;
    border-radius: 4px;

    span,
    input {
      margin-bottom: 1rem;
    }    
  }
`;
