import React from "react";
import file from "../../assets/images/property-2.jpg";
import author from "../../assets/images/author.jpg";
import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  CardDetails,
  DetailItem,
  AgentInfo,
  AgentAvatar,
  AgentName,
  AgentRole,
  CardFooter,
  IconButton,
  CardBanner,
  MonthStyle,
  IconDiv,
  HorizontalDevider,
  UnitNumber,
} from "./PropertyCard.styled";

import { BsBuildings } from "react-icons/bs";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdCloseFullscreen } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const PropertyCard = ({ property }) => {
  return (
    <CardContainer>
      <CardBanner>
        <CardImage src={file} alt="file" />
        <CardTitle>
          <FaMapMarkerAlt /> Belmound Gardens,London
        </CardTitle>
      </CardBanner>
      <CardBody>
        <CardPrice>
          $24000<MonthStyle>/Month</MonthStyle>
        </CardPrice>
        <UnitNumber>Unit No: {property.unitNo}</UnitNumber>
        <CardDetails>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</CardDetails>
        <CardFooter>
          <DetailItem>
            <TbBuildingCommunity /> {property.community}
          </DetailItem>
          <DetailItem>
            <BsBuildings /> {property.building}
          </DetailItem>
        </CardFooter>
        </CardBody>
        <HorizontalDevider/>
        <AgentInfo>
          <div style={{ display: "flex" }}>
            <AgentAvatar src={author} alt="author" />
            <div>
              <AgentName>William Seklo</AgentName>
              <AgentRole>Real Estate Agent</AgentRole>
            </div>
          </div>
          <IconDiv>
            <IconButton>
              <MdCloseFullscreen />
            </IconButton>
            <IconButton>
              <CiHeart/>
            </IconButton>
            <IconButton>
              <MdCloseFullscreen />
            </IconButton>
          </IconDiv>
        </AgentInfo>
      
    </CardContainer>
  );
};

export default PropertyCard;
