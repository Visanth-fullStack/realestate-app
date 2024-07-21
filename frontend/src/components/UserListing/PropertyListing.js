import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  EditIcon,
  DeleteIcon,
  ContainerText,
  Wrapper,
  Container,
  TableHead,
  TableHeader,
} from "./UserListing.styled";
import { FaCheckCircle } from "react-icons/fa";
import { assignProperties } from "../../services/api";

const PropertyListing = ({ properties, userProperties, setMenu ,user }) => {
    const [selectedIds, setSelectedIds] = useState(userProperties);

    const handleCheckboxChange = (propertyId) => {
        setSelectedIds((prevSelectedIds) =>
          prevSelectedIds.includes(propertyId)
            ? prevSelectedIds.filter((id) => id !== propertyId)
            : [...prevSelectedIds, propertyId]
        );
      };
    
      const handleButtonClick = () => {
        assignProperties(user, selectedIds)
        .then(() => console.log('success'))
        .catch((err) => console.log(err))
        setMenu('customer')
      };
  return (
    <Wrapper>
      <Container>
        <ContainerText>Assigned Properties<button onClick={handleButtonClick}>Update</button></ContainerText>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <FaCheckCircle color="blue" />
              </TableHead>
              <TableHead>UnitNo</TableHead>
              <TableHead>Community</TableHead>
              <TableHead>Building</TableHead>
            </TableRow>
          </TableHeader>
          <tbody>
            {properties &&
              properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(property._id)}
                      onChange={() => handleCheckboxChange(property._id)}
                    />
                  </TableCell>
                  <TableCell>{property.unitNo}</TableCell>
                  <TableCell>{property.community}</TableCell>
                  <TableCell>{property.building}</TableCell>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default PropertyListing;
