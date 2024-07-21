// AddProperty.styled.js

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
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100px;
  background: ${props => props.cancel ? '#FF4D4D' : '#007BFF'};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${props => props.cancel ? '#cc0000' : '#0056b3'};
  }
`;
