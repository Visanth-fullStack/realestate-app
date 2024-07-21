import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-family:"Montserrat", sans-serif;
  font-weight:400;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Label = styled.label`
  font-family:"Montserrat", sans-serif;
  font-size: 14px;
  color: #333;
`;

export const Linkspan = styled.a`
  font-family:"Montserrat", sans-serif;
  font-size: 14px;
  color: #007BFF;
  text-align: right;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Button = styled.button`
  font-family:"Montserrat", sans-serif;
  padding: 10px;
  background: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  font-family:"Montserrat", sans-serif;
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: left;
`;
