const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, number: state.number + 1 };
    case "DEC":
      return { ...state, number: state.number - 1 };
    case "RESET":
      return { ...state, number: 0 };
    default:
      throw new Error("unhandled action type");
  }
};

export default reducer;
