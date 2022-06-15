import React, { useState } from "react";

const Form = ({ addPerson }) => {
  const [personName, setPersonName] = useState();
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="form__input">
        <input
          className="form__input__field"
          type="text"
          value={personName}
          onChange={(e) => {
            setPersonName(e.target.value);
          }}
        />
        <button
          className="form__input__btn"
          onClick={() => {
            addPerson({
              id: new Date().getTime().toString(),
              name: personName,
            });
          }}
        >
          Join
        </button>
      </div>
    </form>
  );
};

export default Form;
