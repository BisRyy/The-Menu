import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menus',
  initialState: {
    list: [],
  },
  reducers: {
    get: (state, action) => {
        state.list = action.payload;
    },
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      state.list = state.list.filter((menu) => menu.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { get, add, remove } = menuSlice.actions;

export default menuSlice.reducer;
