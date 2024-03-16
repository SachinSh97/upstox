import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserHoldingApi } from "../../api";

export const userHoldingAction = createAsyncThunk(
  "holding",
  async () => await fetchUserHoldingApi()
);
