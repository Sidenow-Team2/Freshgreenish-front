import { configureStore } from '@reduxjs/toolkit';
import fruitsListReducer from '../slices/fruitListSlice';
import selectedFruitsReducer from '../slices/SelectedFruitsSlice';
import quantityReducer from '../slices/QuantitySlice';
import tabReducer from '../slices/TabSlice';

export const store = configureStore({
    reducer: {
        tab: tabReducer,
        fruits: fruitsListReducer,
        quantity: quantityReducer,
        selectedFruits: selectedFruitsReducer
    }
});
