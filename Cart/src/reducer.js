const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, data: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      data: state.data.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    const newData = state.data.map((item) => {
      if (item.id == action.payload)
        return { ...item, amount: item.amount + 1 };
      return item;
    });
    return { ...state, data: newData };
  }

  if (action.type === "DECREASE") {
    const newData = state.data
      .map((item) => {
        if (item.id == action.payload)
          return { ...item, amount: item.amount - 1 };
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, data: newData };
  }

  if (action.type === "GET_TOTAL") {
    let { totalPrice, totalAmount } = state.data.reduce(
      (acc, item) => {
        const { price, amount } = item;
        acc.totalAmount += amount;
        acc.totalPrice += price * amount;
        return acc;
      },
      {
        totalPrice: 0,
        totalAmount: 0,
      }
    );
    totalPrice = parseFloat(totalPrice.toFixed(2));
    return { ...state, totalPrice, totalAmount };
  }

  throw new Error("Unhandled action type");
};

export default reducer;
