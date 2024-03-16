import { combineReducers } from "@reduxjs/toolkit";

import userHoldingReducer from "./userHolding";

const rootReducer = combineReducers({
  userHolding: userHoldingReducer,
});

export * from "./userHolding";
export * from "./userHolding/selector";

export default rootReducer;
