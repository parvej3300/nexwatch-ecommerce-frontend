import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload; 
      const existing = state.items.find(i => i.id === item.id);
      const qtyToAdd = parseInt(item.qty) || 1;

      if (existing) {
        existing.qty += qtyToAdd;
      } else {
        state.items.push({ ...item, qty: qtyToAdd });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.qty = qty;
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;

export default cartSlice.reducer;