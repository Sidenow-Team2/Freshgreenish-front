import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/loginSlice';
import axios from "axios";
import { useLocation } from "react-router-dom";






function SocialLogin() {
  const BASIC_URL = 'http://3.37.127.195:8080/'
  const { naver } = window;
  const storeUser = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const location = useLocation();


  const naverLogin = new naver.LoginWithNaverId({
    clientId: "ifJwMIlDY0Zez3Y1V__b",
    callbackUrl: ["http://localhost:3000/Login",
],
    loginButton: {
      color: "green",
      type: 3,
      height: 50,
    },

  });

  const getUser = async () => {
    await naverLogin.getLoginStatus((status) => {
      console.log(`로그인?: ${status}`);
      if (status) {
        const user = { ...naverLogin.user };
        setUser(user);
        dispatch(login(user)); 
        console.log(user,"유저정보")
      }
    })
  };


  useEffect(() => {
    naverLogin.init();

    console.log("init!");
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      window.addEventListener('login', getUser);
      return () => {
        window.removeEventListener('login', getUser);
      };
    }
  }, [user]);




const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0]; //token 출력
    console.log(token,'token')
    console.log(BASIC_URL)
    axios.post(`${BASIC_URL}login/oauth2/code/naver`, {
        token
    }, {
      headers: {
      'Content-Type': 'application/json', // Content-Type 헤더 설정
      },
        withCredentials: true
    })
    .then((res)=> {
        window.location.replace('/')
      //서버측에서 로직이 완료되면 홈으로 보내준다
    })
  };


  useEffect(() => {
    getNaverToken();
  }, [user]);

  return (
    <div>
      <div id="naverIdLogin"></div>
      {user ? (
        <div>
          <h2>네이버 로그인 성공</h2>
          <h3>사용자 별명</h3>
          <div>{user.nickname}</div>
          <h3>사용자 이메일</h3>
          <div>{user.email}</div>
          <h3>사용자 프로필사진</h3>
          <img src={user.profile_image} alt="프로필 사진" />
          
        </div>
        
      ) : (
        <div>
          <div id="naverIdLogin"></div>
        </div>
      )}
    </div>
  );
}

export default SocialLogin;

