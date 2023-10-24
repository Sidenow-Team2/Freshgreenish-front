import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/loginSlice';

function SocialLogin() {
  const { naver } = window;
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const naverLogin = new naver.LoginWithNaverId({
    clientId: "ifJwMIlDY0Zez3Y1V__b",
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
      }
    });
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

