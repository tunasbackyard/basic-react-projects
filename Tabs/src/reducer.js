const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT":
      return { ...state, currentIx: action.payload.order };
    default:
      throw new Error(`Unhandled action type: '${action.type}'`);
  }
};

export default reducer;
