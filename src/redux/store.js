import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';

import fruitsListReducer from '../slices/fruitListSlice';
import selectedFruitsReducer from '../slices/SelectedFruitsSlice';
import quantityReducer from '../slices/QuantitySlice';
import tabReducer from '../slices/TabSlice';



// export default configureStore({
//   reducer: {
//     user: loginReducer,
//   },
// });


export default configureStore({
    reducer: {
        user: loginReducer,
        tab: tabReducer,
        fruits: fruitsListReducer,
        quantity: quantityReducer,
        selectedFruits: selectedFruitsReducer
    }
});
