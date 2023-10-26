import { createSlice } from '@reduxjs/toolkit';
import mockData from '../services/cartMockData.json';

const initialQuantityState = {
    fruits: mockData,
};

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState: initialQuantityState,
  reducers: {
    changeQuantity: (state, action) => {
      const fruit = state.fruits.find(fruit => fruit.id === action.payload.id);
      const newQuantity = fruit.quantity + action.payload.change;
      fruit.quantity = newQuantity > 0 ? newQuantity : 1;
    }
  }
});

export const { changeQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
