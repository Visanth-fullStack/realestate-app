import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0a2e42;
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.a`
  color: #fff;
  margin-right: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    margin-right: 5px;
  }
`;

export const Address = styled.div`
  color: #fff;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    margin-right: 15px;
    font-size: 1.2em;
    text-decoration: none;
  }
`;

export const IconLink = styled.a`
  color: #fff;
  margin-right: 10px;
  font-size: 1.2em;
  text-decoration: none;

  &:hover {
    color: #ff7f50;
  }
`;

export const AddListingButton = styled.button`
  background-color: #ff7f50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #ff5733;
  }
`;
