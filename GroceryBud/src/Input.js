import React, { useState } from "react";
import Dialog from "./Dialog";

const Input = ({ createNewItem, editItem, isEditing }) => {
  const [text, setText] = useState();

  return (
    <div className="form__input">
      <input
        className="form__input-field"
        type="text"
        name="item-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="form__input-btn"
        onClick={() => {
          if (text) {
            if (isEditing) editItem(text);
            else createNewItem(text);
            setText("");
          }
        }}
      >
        {isEditing ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default Input;
