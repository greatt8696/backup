const initState = {
  exchangeTransactions: [],
  orderbooks: [],
  selectedCoin: {},
};

const coinReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        exchangeTransactions: [payload, ...state.exchangeTransactions],
      };

    case "CHANGE_TRANSACTION":
      return {
        ...state,
        orderbooks: payload,
      };

    default:
      return state;
  }
};

export default coinReducer;
