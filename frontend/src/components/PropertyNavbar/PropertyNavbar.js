import React, { useState } from "react";
import {
  Logo,
  LogoIcon,
  MenuItem,
  MenuItems,
  MenuLink,
} from "../Navbar/Navbar.styled";
import { BsFillBuildingsFill } from "react-icons/bs";
import {
    Dropdown,
  DropdownItem,
  DropText,
  Icon,
  ProfileContainer,
  PropertyContainer,
  UserText,
} from "./PropertyNavbar.styled";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const PropertyNavbar = ({setMenu}) => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setDropdownVisible(false)
    navigate('/');
  }
  return (
    <PropertyContainer>
      <Logo>
        <LogoIcon>
          <BsFillBuildingsFill color="#ff5a3d" size={20} />
        </LogoIcon>
        RealEstate
      </Logo>
      <MenuItems>
        <MenuItem>
          <MenuLink onClick={() => setMenu('property')}>Properties</MenuLink>
        </MenuItem>
        {user && user.role === "admin" && (
          <>
            <MenuItem>
              <MenuLink onClick={() => setMenu('customer')}>Leads</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={() => setMenu('admin')}>Admins</MenuLink>
            </MenuItem>
          </>
        )}
      </MenuItems>
      <ProfileContainer onClick={toggleDropdown}>
        {user && user.role === 'admin' && <Icon>A</Icon>}
        {user && user.role === 'customer' && <Icon>C</Icon>}
        {user && user.role === 'admin' && <UserText>Admin</UserText>}
        {user && user.role === 'customer' && <UserText>Client</UserText>}
        {dropdownVisible && (
          <Dropdown>
            <DropdownItem onClick={handleSignOut}><DropText>Sign Out</DropText></DropdownItem>
          </Dropdown>
        )}
      </ProfileContainer>
     
    </PropertyContainer>
  );
};

export default PropertyNavbar;
