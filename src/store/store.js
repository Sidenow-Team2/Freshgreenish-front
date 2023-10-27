import { configureStore } from '@reduxjs/toolkit';
import fruitsListReducer from '../slices/fruitListSlice';
import selectedFruitsReducer from '../slices/SelectedFruitsSlice';
import deliveryDateReducer from '../slices/deliveryDateSlice';
import tabReducer from '../slices/TabSlice';

export const store = configureStore({
    reducer: {
        tab: tabReducer,
        fruits: fruitsListReducer,
        selectedFruits: selectedFruitsReducer,
        DeliveryDate: deliveryDateReducer
    },
});
