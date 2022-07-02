export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return { ...state, currentFilter: action.payload.filter };
    default:
      throw new Error(`Unhandled action type: '${action.type}'`);
  }
};
