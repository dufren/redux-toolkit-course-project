import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';
import productReducer from './features/products/productSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    product: productReducer
  },
});
