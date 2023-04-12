import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    get: (state, action) => {
        state.products = action.payload;
    },
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products.push(action.payload);
    },
    remove: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { get, add, remove } = productSlice.actions;

export default productSlice.reducer;
