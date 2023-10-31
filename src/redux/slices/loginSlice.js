import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    user: null, // 사용자 정보를 저장할 필드 추가
    token: '',
    
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; // 사용자 정보 저장
      console.log("네이버 로그인 성공");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null; // 로그아웃 시 사용자 정보 초기화
      console.log("네이버 로그아웃");
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
