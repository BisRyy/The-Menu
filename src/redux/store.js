import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import productReducer from './productSlice'
import menuReducer from './menuSlice'
import  authSlice  from './authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    menu: menuReducer,
    auth: authSlice,
  },
})