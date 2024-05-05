import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./Slices/basketSlice"
import shopReducer from "./Slices/shopSlice"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    shop: shopReducer,
  },
})