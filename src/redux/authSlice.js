import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(window.localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  },
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem('user', JSON.stringify(action.payload));
    },
    login: (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      window.localStorage.removeItem('user');
    }
  },
});

export const { register ,login, logout } = authSlice.actions;
export default authSlice.reducer;
