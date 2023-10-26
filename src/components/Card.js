import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/_Card.scss";
import products from "../db/products"; // 더미 데이터 또는 실제 데이터 import
import { useShopping } from "../test/ShoppingContext";

export default function Card() {
  const [productData] = useState(products);
  // const [state, dispatch] = useShopping();

  const getSlidesToShow = () => {
    if (window.innerWidth >= 1200) {
      return 4;
    } else if (window.innerWidth >= 992) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    }

    return 1;
  };

  const [settings, setSettings] = useState({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <img src="/img/left-arrow.png" alt="Previous" />,
    nextArrow: <img src="/img/right-arrow.png" alt="Next" />,
    slidesToShow: getSlidesToShow(), // 이 부분에서 slidesToShow를 설정
  });

  useEffect(() => {
    const handleResize = () => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: getSlidesToShow(),
      }));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      slidesToShow: getSlidesToShow(),
    }));
  }, []);

  // 나머지 코드는 동일

  return (
    <>
      <div className="card-list">
        <h1>놓치면 후회할 과일</h1>
        <Slider {...settings}>
          {productData.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <img src={product.productFirstImage} alt="" style={{ width: '100%', height: 'auto' }} />
              <h3>{product.title}</h3>
              <p>{product.price}원</p>
            </Grid>
          ))}
        </Slider>
      </div>
      <div className="card-list">
        <h1>이번 달 추천 과일</h1>
        <Slider {...settings}>
          {productData.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <img src={product.productFirstImage} alt="" style={{ width: '100%', height: 'auto' }} />
              <h3>{product.title}</h3>
              <p>{product.price}원</p>
            </Grid>
          ))}
        </Slider>
      </div>
    </>
  );
}
