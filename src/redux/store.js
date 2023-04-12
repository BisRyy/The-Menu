import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import productReducer from './productSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
})