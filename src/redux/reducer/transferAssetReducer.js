const initState = {
  assetTransactions: [],
};

const transferAssetReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TRANSACTION":
      console.log("@@@@", payload);
      return {
        ...state,
        assetTransactions: [payload, ...state.assetTransactions],
      };

    default:
      return state;
  }
};

export default transferAssetReducer;
