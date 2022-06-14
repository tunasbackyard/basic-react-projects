import React, { useState } from "react";
import Modal from "./components/Modal";
import "./index.css";
import Sidebar from "./Sidebar";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <Sidebar />
      <button
        className="modal-btn"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Show Modal
      </button>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </main>
  );
};

export default App;
