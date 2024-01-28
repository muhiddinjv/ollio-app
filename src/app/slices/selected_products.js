import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: {},
    price: 0,
    selected_products: 0,
    delivery_fee: 0,
    has_activation: false,
};

const selected_products = createSlice({
  name: 'selected_products',
  initialState,
  reducers: {
    HANDLE_SET_PRODUCT_PRICE(state, action) {
      const { price, selected_products, delivery_fee, has_activation, product } = action.payload;
      state.price = price;
      state.selected_products = selected_products;
      state.delivery_fee = delivery_fee;
      state.has_activation = has_activation;
      state.product = product;
    },
  },
});

export const { HANDLE_SET_PRODUCT_PRICE } = selected_products.actions;
export const reducer = selected_products.reducer;
export default selected_products;
