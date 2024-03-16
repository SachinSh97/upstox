import { createSlice } from "@reduxjs/toolkit";
import { userHoldingAction } from "./action";

const initialState = {
  status: "idle",
  error: null,
  data: [],
};

const userHoldingSlice = createSlice({
  name: "userHolding",
  initialState,
  reducers: {
    resetUserHolding: () => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userHoldingAction.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(userHoldingAction.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(userHoldingAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload?.data ?? [];
      });
  },
});

export const { resetUserHolding } = userHoldingSlice.actions;
export { userHoldingAction };
export default userHoldingSlice.reducer;
