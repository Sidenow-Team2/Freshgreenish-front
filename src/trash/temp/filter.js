import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, setFilter } from './store';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const filter = useSelector(state => state.products.filter);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: '새 상품',
    };
    dispatch(addProduct(newProduct));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>상품 목록</h2>
      <input
        type="text"
        placeholder="상품 검색"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name}{' '}
            <button onClick={() => handleRemoveProduct(product.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>상품 추가</button>
    </div>
  );
};

export default ProductList;



// store.js

// import { configureStore, createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: [], // 상품 목록
//   filter: '', // 필터 문자열
// };

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//     },
//     removeProduct: (state, action) => {
//       state.products = state.products.filter(product => product.id !== action.payload);
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addProduct, removeProduct, setFilter } = productSlice.actions;

// const store = configureStore({
//   reducer: {
//     products: productSlice.reducer,
//   },
// });

// export default store;