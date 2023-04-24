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
    update: (state, action) => {
      state.list = state.list.map((menu) => {
        if (menu._id === action.payload._id) {
          return action.payload;
        }
        return menu;
      });
    },
    remove: (state, action) => {
      state.list = state.list.filter((menu) => menu._id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { get, add, update, remove } = menuSlice.actions;

export default menuSlice.reducer;
