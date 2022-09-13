import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isShown: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    show: (state) => {
      state.isShown = !state.isShown
    },
    add: (state, action) => {
      const existingItem = state.cartItems.some(product => product.id === action.payload.id)

      if (!existingItem) {
        state.cartItems.push(action.payload)
      } else {
        const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
        cartItem.amount = cartItem.amount + 1;
      }
    }
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals, show, add } = cartSlice.actions;

export default cartSlice.reducer;
