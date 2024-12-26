import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
    deleteProduct: (state, action) => state.filter(product => product.id !== action.payload),
    editProduct: (state, action) => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { setProducts, deleteProduct, editProduct } = productsSlice.actions;

export default productsSlice.reducer;
