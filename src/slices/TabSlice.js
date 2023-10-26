import { createSlice } from '@reduxjs/toolkit';

const initialTabState = {
    currentTab: "국산 과일"
};

export const tabSlice = createSlice({
  name: 'tab',
  initialState: initialTabState,
  reducers: {
      setCurrentTab: (state, action) => {
          state.currentTab = action.payload;
      }
  },
});

export const { 
  setCurrentTab 
} = tabSlice.actions;

export default tabSlice.reducer;
