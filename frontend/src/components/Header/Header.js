import React from 'react';
import {
  HeaderContainer,
  ContactInfo,
  Email,
  Address,
  Icons,
  IconLink,
  AddListingButton,
} from './Header.styled';

import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderContainer>
      <ContactInfo>
        <Email href="mailto:info@homeverse.com">
          <FaEnvelope /> info@myrealestate.com
        </Email>
        <Address>
          <FaMapMarkerAlt /> 15/A, Nest Tower, NYC
        </Address>
      </ContactInfo>
      <Icons>
        <IconLink href="#">
          <FaFacebook />
        </IconLink>
        <IconLink href="#">
          <FaTwitter />
        </IconLink>
        <IconLink href="#">
          <FaInstagram />
        </IconLink>
        <IconLink href="#">
          <FaPinterest />
        </IconLink>
      </Icons>
      <AddListingButton>
        Add Listing
      </AddListingButton>
    </HeaderContainer>
  );
};

export default Header;
