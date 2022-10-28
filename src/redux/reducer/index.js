import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import transferAssetReducer from "./transferAssetReducer";
import exchangeReducer from "./exchangeReducer";
import coinReducer from "./coinReducer";

const rootReducer = combineReducers({
  loginReducer,
  transferAssetReducer,
  exchangeReducer,
  coinReducer,
});

export default rootReducer;
