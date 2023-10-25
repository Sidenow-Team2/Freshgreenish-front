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
  deleteFruit 
} = fruitListSlice.actions;

export default fruitListSlice.reducer;
