import { createSlice } from '@reduxjs/toolkit';
import mockData from '../services/cartMockData.json';

const initialState = {
    currentTab: "국산 과일",
    fruits: mockData,
    selectedFruits: [],
};

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
      setCurrentTab: (state, action) => {
          state.currentTab = action.payload;
      },
      setFruits: (state, action) => {
          state.fruits = action.payload;
      },
      toggleSelectFruit: (state, action) => {
          const id = action.payload;
          const index = state.selectedFruits.indexOf(id);
          if (index >= 0) {
              state.selectedFruits.splice(index, 1);
          } else {
              state.selectedFruits.push(id);
          }
      },
      changeDeliveryCycle: (state, action) => {
          const { id, cycle } = action.payload;
          const fruit = state.fruits.find(fruit => fruit.id === id);
          fruit.deliveryCycle = cycle;
      },
      deleteFruit: (state, action) => {
          const id = action.payload;
          state.fruits = state.fruits.filter(fruit => fruit.id !== id);
      }
  },
});

export const { 
  setCurrentTab, 
  setFruits, 
  toggleSelectFruit, 
  changeDeliveryCycle, 
  deleteFruit 
} = fruitsSlice.actions;

export default fruitsSlice.reducer;
