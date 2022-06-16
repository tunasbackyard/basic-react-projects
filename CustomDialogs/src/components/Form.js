import React, { useEffect, useState } from "react";
import Dialog from "./Dialog";

const Form = ({ addPerson }) => {
  const [personName, setPersonName] = useState();
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {isInputEmpty && (
        <Dialog
          text={"Name cannot blank"}
          color={"hsl(341deg 88% 46%)"}
          displayHandler={[isInputEmpty, setIsInputEmpty]}
        />
      )}
      {isAdded && (
        <Dialog
          text={"Person successfully joined"}
          color={"hsl(134deg 29% 51%)"}
          displayHandler={[isAdded, setIsAdded]}
        />
      )}
      <div className="form__input">
        <input
          className="form__input__field"
          type="text"
          value={personName}
          onChange={(e) => {
            setPersonName(e.target.value);
          }}
          placeholder="type a name"
        />
        <button
          className="form__input__btn"
          onClick={() => {
            if (personName) {
              setIsInputEmpty(false);
              addPerson({
                id: new Date().getTime().toString(),
                name: personName,
              });
              setIsAdded(true);
              setPersonName("");
            } else {
              setIsInputEmpty(true);
            }
          }}
        >
          Join
        </button>
      </div>
    </form>
  );
};

export default Form;
