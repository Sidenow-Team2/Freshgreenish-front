import React, { createContext, useReducer, useContext, useEffect } from 'react';


const ShoppingContext = createContext();

const initialState = {
  cart: [],
  products: [], // 새로운 상태 추가: products
};

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // useEffect(() => {
  //   // 상품 목록을 API에서 가져와 상태 업데이트
  //   fetch('/dummy.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch({ type: 'SET_PRODUCTS', payload: data });
  //     })
  //     .catch((error) => {
  //       console.error('상품 목록을 불러오는 중 오류 발생:', error);
  //     });
  // }, []);


  // useEffect(() => {
  //   // 상품 목록을 API에서 가져와 상태 업데이트
  //   fetch('/dummy.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // API 응답이 객체일 경우 객체의 값을 배열로 변환
  //       const productsArray = Object.values(data);
  //       dispatch({ type: 'SET_PRODUCTS', payload: productsArray });
  //     })
  //     .catch((error) => {
  //       console.error('상품 목록을 불러오는 중 오류 발생:', error);
  //     });
  // }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(products);
        const response = await fetch('/dummy.json');
        if (!response.ok) {
          throw new Error('데이터를 가져올 수 없습니다.');
        }
        const data = await response.json();
        const productsArray = Object.values(data);
        // console.log(productsArray)
        dispatch({ type: 'SET_PRODUCTS', payload: productsArray });
      } catch (error) {
        console.error('상품 목록을 불러오는 중 오류 발생:', error);
      }
    };
  
    fetchData();
  }, []);


  return (
    <ShoppingContext.Provider value={{ state, addToCart, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => {
  return useContext(ShoppingContext);
};