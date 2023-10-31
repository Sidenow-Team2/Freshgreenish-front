import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/loginSlice';
import axios from "axios";
import { useLocation } from "react-router-dom";

function SocialLogin() {
  const { naver } = window;
  const storeUser = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const location = useLocation();
  const naverLogin = new naver.LoginWithNaverId({
    clientId: "ifJwMIlDY0Zez3Y1V__b",
    clientId: "WeWqXfUBTCHfWW4gWEbn",
    callbackUrl: ["http://localhost:3000/Login",
  // "https://c583-121-167-58-230.ngrok-free.app/login/oauth2/code/naver",
  // "http://localhost:8080/login/oauth2/code/naver",
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
          // try {
          //   const response = axios.post('http://localhost:8080/auth/signup', user);
          //   console.log('회원가입 완료:', response.data);
          // } catch (error) {
          //   console.error('회원가입 오류:', error);
          // }
        };
      });
  };

  const getNaverToken = () => {
    if (!location.hash) return;
    const tokens = location.hash.split('=')[1].split('&')[0];
     //token 출력
    // axios.post(`${process.env.REACT_APP_SERVER_API}/user/naver-login`, {
    // axios.post(`https://localhost:8080/oauth2/authorization/naver`, {
    //     token
    // }, {
    //     withCredentials: true
    // })
    // .then((res)=> {
    //     window.location.replace('/')
    //   //서버측에서 로직이 완료되면 홈으로 보내준다
    // })
    console.log(tokens,"token입니다")
  };






  useEffect(() => {
    naverLogin.init();
    getNaverToken();

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

  return (
    <div>
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

