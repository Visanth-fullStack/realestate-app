// AddProperty.js

import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  TextArea,
  RadioContainer,
  RadioLabel,
  RadioGroup,
  ButtonContainer,
  Button,
} from "./AddProperty.styled";
import {
  createProperty,
  getProperty,
  updateProperty,
} from "../../services/api";

const AddProperty = ({ id, closeModal}) => {
  const [unitNo, setUnitNo] = useState("");
  const [description, setDescription] = useState("");
  const [community, setCommunity] = useState("CommunityA");
  const [building, setBuilding] = useState("BuildingA");

  const handleCommunityChange = (e) => {
    setCommunity(e.target.value);
  };

  const handleBuildingChange = (e) => {
    setBuilding(e.target.value);
  };

  useEffect(() => {
    if (id) {
      getProperty(id)
        .then((property) => {
          console.log("success");
          setUnitNo(property.unitNo);
          setCommunity(property.community);
          setBuilding(property.building);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      unitNo,
      description,
      community,
      building,
    };
    if (id) {
      updateProperty(id, formData)
        .then(() => console.log("update success"))
        .catch((err) => console.log(err));
    } else {
      createProperty(formData)
        .then(() => console.log("create success"))
        .catch((err) => console.log(err));
    }
    closeModal()
    window.location.reload();
  };

  return (
    <Container>
      <Title>{id ? "Update Property" : "Add a new Property"}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Unit No"
          value={unitNo}
          onChange={(e) => setUnitNo(e.target.value)}
        />
        <TextArea
          placeholder="Description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <RadioContainer>
          <RadioLabel>Community</RadioLabel>
          <RadioGroup>
            <input
              type="radio"
              name="community"
              value="CommunityA"
              checked={community === "CommunityA"}
              onChange={handleCommunityChange}
            />
            <label>CommunityA</label>
            <input
              type="radio"
              name="community"
              value="CommunityB"
              checked={community === "CommunityB"}
              onChange={handleCommunityChange}
            />
            <label>CommunityB</label>
          </RadioGroup>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel>Building</RadioLabel>
          <RadioGroup>
            <input
              type="radio"
              name="building"
              value="BuildingA"
              checked={building === "BuildingA"}
              onChange={handleBuildingChange}
            />
            <label>BuildingA</label>
            <input
              type="radio"
              name="building"
              value="BuildingB"
              checked={building === "BuildingB"}
              onChange={handleBuildingChange}
            />
            <label>BuildingB</label>
          </RadioGroup>
        </RadioContainer>
        <ButtonContainer>
          <Button cancel type="button" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">{id ? 'Update' : 'Submit'}</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AddProperty;
