import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shop: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShop: (state, action) => {
      state.shop = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShop } = shopSlice.actions;

export const selectShop = (state) => state.shop.shop;

export default shopSlice.reducer;
