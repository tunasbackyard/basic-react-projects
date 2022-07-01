const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT": {
      const currentIx =
        state.currentIx + 1 < state.data.length ? state.currentIx + 1 : 0;
      return { ...state, currentIx };
    }
    case "PREV": {
      const currentIx =
        state.currentIx - 1 >= 0 ? state.currentIx - 1 : state.data.length - 1;
      return { ...state, currentIx };
    }
    case "RANDOM": {
      const currentIx = Math.trunc(Math.random() * state.data.length);

      return { ...state, currentIx };
    }

    default:
      throw new Error(`Unhandled action type '${action.type}`);
  }
};

export default reducer;
