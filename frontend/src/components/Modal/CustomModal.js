import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    fontFamily: "Montserrat",
    fontSize: "15px",
  },
};

const CustomModal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={closeModal}>
          <IoMdClose />
        </button>
      </div>
      {children}
    </Modal>
  );
};

export default CustomModal;
