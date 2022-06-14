import React, { useRef } from "react";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <dialog className="modal">
      <button
        className="close-btn"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <i className="fa-solid fa-x"></i>
      </button>
      <h2>This is a modal</h2>
    </dialog>
  );
};

export default Modal;
