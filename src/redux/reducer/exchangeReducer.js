const initState = {
  exchangeTransactions: [],
  orderbooks: [],
};

const exchangeReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TRANSACTION":
      console.log("@@@@", payload);
      return {
        ...state,
        exchangeTransactions: [payload, ...state.exchangeTransactions],
      };

    case "CHANGE_TRANSACTION":
      console.log("@@@@", payload);
      return {
        ...state,
        orderbooks: payload,
      };

    default:
      return state;
  }
};

export default exchangeReducer;
