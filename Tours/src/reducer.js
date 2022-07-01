const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload.data };
    case "STOP_LOADING":
      return { ...state, isLoading: false };
    case "REMOVE_DATA": {
      const filteredData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, data: filteredData };
    }
    default:
      throw new Error(`Unhandled action type '${action.type}'`);
  }
};

export default reducer;
