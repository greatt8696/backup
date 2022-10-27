import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import transferAssetReducer from "./transferAssetReducer";
import exchangeReducer from "./exchangeReducer";

const rootReducer = combineReducers({
  loginReducer,
  transferAssetReducer,
  exchangeReducer,
});

export default rootReducer;
