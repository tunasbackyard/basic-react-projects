const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return { ...state, data: [] };

    default:
      throw new Error(`Unhandled Action Type '${action.type}'`);
  }
};

export default reducer;
