const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IX":
      return { ...state, currentIx: action.payload.index };
    default:
      throw new Error(`Unhandled action type: '${action.type}'`);
  }
};

export default reducer;
