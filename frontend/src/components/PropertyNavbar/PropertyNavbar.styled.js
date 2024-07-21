import styled from "styled-components";

export const PropertyContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #bdbdbd;
  padding:0px 20px;
`;

export const ProfileContainer = styled.div`
position:relative;
  display: flex;
  gap: 10px;
  border-left: 1px solid #bdbdbd;
  height:100%;
  align-items:center;
  padding-left:10px;
  cursor: pointer;
  &:hover {
    background-color: #bdbdbd;
  }
`;

export const Icon = styled.div`
  background-color: #bdbdbd;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 50%;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  color: #000000;
  font-weight: 300;
  width:40px;
  height:40px;
`;

export const UserText = styled.span`
    font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #000000;
  font-weight: 400;
`
export const Dropdown = styled.div`
  position: absolute;
  width:100%;
  top: 70px;
  right: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;


export const DropText = styled.span`
    font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #000000;
  font-weight: 300;
`
