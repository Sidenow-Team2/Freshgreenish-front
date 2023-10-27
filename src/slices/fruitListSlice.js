import { createSlice } from '@reduxjs/toolkit';
import mockData from '../services/cartMockData.json';

const initialFruitListState = {
    fruits: mockData
};

export const fruitListSlice = createSlice({
  name: 'fruitList',
  initialState: initialFruitListState,
  reducers: {
      setFruits: (state, action) => {
          state.fruits = action.payload;
      },

      changeQuantity: (state, action) => {
        const fruit = state.fruits.find(fruit => fruit.id === action.payload.id);
        const newQuantity = fruit.quantity + action.payload.change;
        fruit.quantity = newQuantity > 0 ? newQuantity : 1;
      },

      changeDeliveryCycle: (state, action) => {
          const { id, cycle } = action.payload;
          const fruit = state.fruits.find(fruit => fruit.id === id);
          if (fruit) {
              fruit.deliveryCycle = cycle;
          }
      },
      
      deleteFruit: (state, action) => {
          const id = action.payload;
          state.fruits = state.fruits.filter(fruit => fruit.id !== id);
      }
  },
});

export const { 
  setFruits, 
  changeDeliveryCycle, 
  deleteFruit,
  changeQuantity
} = fruitListSlice.actions;

export default fruitListSlice.reducer;
