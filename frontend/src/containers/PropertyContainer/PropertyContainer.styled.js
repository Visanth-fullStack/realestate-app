import styled from "styled-components";

export const IconContainer = styled.div`
  visibility: hidden;
  display: flex;
  padding: 10px;
  gap: 15px;
  align-items: center;
  background-color: #fff;
  width: 70px;
  position:absolute;
  top:0px;
  left:10px;
  z-index:1;
  border-radius:5px;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: #f2f6f7;
  display: flex;
  row-gap: 40px;
  column-gap:10px;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  justify-content: center;
`;

export const ActionContainer = styled.div`
  position: relative;
  width: 30%;
  &:hover ${IconContainer} {
    visibility: visible;
  }
`

export const Wrapper = styled.div`
    padding-top:50px;
    padding-bottom:25px;
    padding-right:25px;
    display:flex;
    gap:10px;
    justify-content:end;
    align-items:center;
    background-color:#f2f6f7;
    cursor: pointer;
    h5 {
        font-family: "Montserrat", sans-serif;
        color: #000;
        font-size:20px;
        font-weight:400;
    }
    span {
        width:40px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#ff5a3d;
        border-radius:50%;
    }
`
