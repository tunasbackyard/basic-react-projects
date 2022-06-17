const Reducer = (state, action) => {
  if (action.type === "SET_PERSON_NAME")
    return { ...state, personName: action.payload };
  if (action.type === "RESET_PERSON_NAME") return { ...state, personName: "" };
  if (action.type === "SUCCESS") return { ...state, isAdded: true };
  if (action.type === "USER_TYPING") return { ...state, isInputEmpty: false };
  if (action.type === "BLANK_INPUT") return { ...state, isInputEmpty: true };
  if (action.type === "HIDE_DIALOG")
    return { ...state, isInputEmpty: false, isAdded: false };
  throw new Error("Unhandled action type: ");
};

export default Reducer;
