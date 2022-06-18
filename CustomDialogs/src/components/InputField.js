import React from "react";
import { useContext } from "react";
import { Context } from "../App";

const InputField = ({ state, dispatch }) => {
  const { addPerson } = useContext(Context);
  return (
    <div className="form__input">
      <input
        className="form__input__field"
        type="text"
        value={state.personName}
        onChange={(e) => {
          dispatch({ type: "SET_PERSON_NAME", payload: e.target.value });
        }}
        placeholder="type a name"
      />
      <button
        className="form__input__btn"
        onClick={() => {
          if (state.personName) {
            dispatch({ type: "USER_TYPING" });
            addPerson({
              id: new Date().getTime().toString(),
              name: state.personName,
            });
            dispatch({ type: "SUCCESS" });
            dispatch({ type: "RESET_PERSON_NAME" });
          } else dispatch({ type: "BLANK_INPUT" });
        }}
      >
        Join
      </button>
    </div>
  );
};

export default InputField;
