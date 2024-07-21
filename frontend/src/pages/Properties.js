import React, { useEffect, useState } from "react";
import { getProperties } from "../services/api";
import PropertyNavbar from "../components/PropertyNavbar/PropertyNavbar";
import PropertyContainer from "../containers/PropertyContainer/PropertyContainer";
import UserListing from "../components/UserListing/UserListing";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import CustomModal from "../components/Modal/CustomModal";
import AddProperty from "../components/AddProperty/AddProperty";
import PropertyListing from "../components/UserListing/PropertyListing";

const Properties = () => {
  const [properties, setProperties] = useState();
  const [userProperties, setUserProperties] = useState([])
  const [user,setUser] = useState('')
  const [menu, setMenu] = useState("property");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(null)

  const handleFetch = () => {
    getProperties()
      .then((properties) => setProperties(properties.properties))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <PropertyNavbar setMenu={setMenu} />
      {menu === "property" && properties && properties.length && (
        <PropertyContainer properties={properties} openModal={openModal} setEdit={setEdit}/>
      )}
      {(menu === "customer") && <UserListing menu='customer' setMenu={setMenu} setUserProperties={setUserProperties} setUser={setUser}/>}
      {(menu === "admin") && <UserListing menu='admin' />}
      {(menu === "listings") && <PropertyListing properties={properties} userProperties={userProperties} setMenu={setMenu} user={user}/>}
      <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <AddProperty id = {edit} closeModal={closeModal}/>
      </CustomModal>
    </>
  );
};

export default Properties;
