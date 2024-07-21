import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: ${(props) => (props.isFixed ? "fixed" : "relative")};
  top: 0;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

export const LogoIcon = styled.span`
  color: #ff6347;
  margin-right: 0.5rem;
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 1rem;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  &:hover {
    color: #ff6347;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ProfileButton = styled(IconButton)`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
