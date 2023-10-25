import { createSlice } from '@reduxjs/toolkit';

const initialSelectedFruitsState = {
    selectedFruits: []
};

export const selectedFruitsSlice = createSlice({
  name: 'selectedFruits',
  initialState: initialSelectedFruitsState,
  reducers: {
      toggleSelectFruit: (state, action) => {
          const id = action.payload;
          const index = state.selectedFruits.indexOf(id);
          if (index >= 0) {
              state.selectedFruits.splice(index, 1);
          } else {
              state.selectedFruits.push(id);
          }
      }
  },
});

export const { 
  toggleSelectFruit 
} = selectedFruitsSlice.actions;

export default selectedFruitsSlice.reducer;
