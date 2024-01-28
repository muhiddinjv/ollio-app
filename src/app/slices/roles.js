import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getRoles = createAsyncThunk("/get/roles/", async (data) => {
  const response = await axios.get(`roles/list`);
  return response.data;
});

const roles = createSlice({
  name: "roles",
  initialState,
  reducers: {
    getRoles(state, action) {
      const { reservations } = action.payload;
      state.reservations = reservations;
    },
    reset() {
      return {
        ...initialState,
      };
    },
  },
  
  extraReducers(builder) {
    builder
      .addCase(getRoles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.data = [];
        state.data = state.data.concat(action.payload);
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { reset } = roles.actions;
export const reducer = roles.reducer;
export const selectAllRoles = (state) => state?.roles?.data[0]?.data;
export default roles;
