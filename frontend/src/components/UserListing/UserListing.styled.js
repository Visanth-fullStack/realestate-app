import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const Wrapper = styled.div`
background-color: #f2f6f7;
width:100%;
padding-top:50px;
padding-bottom:50px;
`

export const Container = styled.div`
width:90%;
margin:auto;
border: 1px solid #ddd;
border-radius:20px;
`

export const ContainerText = styled.div `
padding:10px;
  font-family:"Montserrat", sans-serif;
font-size:18px;
font-weight:500;
display: flex;
align-items:center;
justify-content:space-between;
color:#000000;
button {
  padding:5px 10px;
  background-color:blue;
  color:#fff;
  border:none;
  border-radius:5px;
}
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
     background-color: #f2f2f2;
`

export const TableRow = styled.tr`
  &:hover {
    background-color: #f2f2f2;
  }
  
`;

export const TableHead = styled.td`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-family:"Montserrat", sans-serif;
  font-weight:500;
  color:#000000;
`;

export const TableCell = styled.td`
  border-top: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-family:"Montserrat", sans-serif;
  font-size:15px;
  color:#000000;
  &:first-child {
    text-align: left;
  }
`;

export const EditIcon = styled(FaEdit)`
  color: #4CAF50;
  cursor: pointer;
  margin-right: 8px;
`;

export const DeleteIcon = styled(FaTrash)`
  color: #f44336;
  cursor: pointer;
`;
