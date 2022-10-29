const initState = {
  exchangeTransactions: [],
  orderbooks: [],
  selectedCoin: {},
  candles: {},
  coinsPrice: [
    "KRW-BTC",
    "KRW-ETH",
    "KRW-XRP",
    "KRW-ADA",
    "KRW-DOGE",
    "KRW-ATOM",
    "KRW-SOL",
    "KRW-ETC",
  ].map((val) => {
    return { code: val };
  }),
};

const coinReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_COIN":
      console.log(payload);

      return {
        ...state,
        coinsPrice: state.coinsPrice.map((coin) => {
          return coin.code === payload.code ? { ...coin, ...payload } : coin;
        }),
      };

    case "UPDATE_CANDLE":
      return {
        ...state,
        candles: { ...payload },
      };
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
