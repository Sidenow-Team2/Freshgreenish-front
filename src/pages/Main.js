import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Card from "../components/Card";
import { currentTab } from "../slices/TabSlice";


import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab } from '../slices/TabSlice';
import { setFruits } from '../slices/fruitListSlice';

function Main() {
  const dispatch = useDispatch();
  // const currentTab = useSelector(state => state.fruits.currentTab);

  useEffect(()=>{
      dispatch(setCurrentTab("국산 과일"));
      // console.log(currentTab)
      console.log('test')
  },[])

  return (
    <React.Fragment>
     {/* 슬라이드 배너 */}
      <Banner />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
        }}
      >
     {/* 추기 베너 */}
        <img
          src="/img/banner4.png"
          alt="banner4"
          style={{
            maxWidth: "50%",
            maxHeight: "50%",
            width: "auto",
            height: "auto",
          }}
        />
      </div>
      <Card />
    </React.Fragment>
  );
}

export default Main;
