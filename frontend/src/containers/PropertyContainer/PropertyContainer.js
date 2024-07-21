import React, { useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertCard";
import {
  ActionContainer,
  Container,
  IconContainer,
  Wrapper,
} from "./PropertyContainer.styled";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { deleteProperty, updateProperty } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

const PropertyContainer = ({ properties, openModal, setEdit }) => {
  const { user } = useAuth();
  const handleEdit = (id) => {
    setEdit(id);
    openModal();
  };
  const handleDelete = (id) => {
    deleteProperty(id)
      .then(() => {
        console.log("Delete successful");
        window.location.reload();
      })
      .catch((err) => console.log("error:", err));
  };

  const handleCreate = () => {
    setEdit(null);
    openModal();
  };
  return (
    <>
      <Wrapper onClick={handleCreate}>
        {user && user.role === "admin" && (
          <>
            <span>
              <IoAddCircleOutline size={25} />
            </span>
            <h5> Add a Property</h5>
          </>
        )}
      </Wrapper>
      <Container>
        {properties.map((property) => (
          <ActionContainer key={property.id}>
            {user && user.role === "admin" && (
              <IconContainer>
                <FiEdit size={20} onClick={() => handleEdit(property._id)} />
                <MdDeleteOutline
                  size={22}
                  onClick={() => handleDelete(property._id)}
                />
              </IconContainer>
            )}
            <PropertyCard key={property.id} property={property} />
          </ActionContainer>
        ))}
      </Container>
    </>
  );
};

export default PropertyContainer;
