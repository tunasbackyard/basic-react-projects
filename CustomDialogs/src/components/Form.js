import React, { useReducer } from "react";
import Dialog from "./Dialog";
import Reducer from "../Reducer";
import InputField from "./InputField";

const Form = ({ addPerson }) => {
  const [state, dispatch] = useReducer(Reducer, {
    personName: "",
    isInputEmpty: false,
    isAdded: false,
  });

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {state.isInputEmpty && (
        <Dialog
          text={"Name cannot blank"}
          color={"hsl(341deg 88% 46%)"}
          dispatch={dispatch}
        />
      )}
      {state.isAdded && (
        <Dialog
          text={"Person successfully joined"}
          color={"hsl(134deg 29% 51%)"}
          dispatch={dispatch}
        />
      )}
      <InputField state={state} dispatch={dispatch} addPerson={addPerson} />
    </form>
  );
};

export default Form;
