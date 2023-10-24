import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Main() {
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
