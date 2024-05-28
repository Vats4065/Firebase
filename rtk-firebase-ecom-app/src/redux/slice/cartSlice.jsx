import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    incrementQty:(state, action) => {

    },
    remove: (state, action) => {
      console.log(action.payload);
      state.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
