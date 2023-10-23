
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './api';

const initialState = {
  products: [], // 상품 목록
  filter: '', // 필터 문자열
};

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addProduct, removeProduct, setFilter } = productSlice.actions;

export const fetchAndAddProducts = () => async (dispatch) => {
  try {
    const items = await fetchProducts(); // API에서 아이템 목록 가져오기
    items.forEach((item) => {
      dispatch(addProduct(item)); // 각 아이템을 스토어에 추가
    });
  } catch (error) {
    console.error('아이템 목록을 가져오는 중 오류가 발생했습니다:', error);
  }
};






const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;