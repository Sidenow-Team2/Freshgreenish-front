import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/_Card.scss";
// import { getProducts } from '../api';
import products from "../db/products";



export default function Card() {
  const [productData] = useState(products); // 상품 데이터 관리를 위한 state
  
  // 상품 데이터 가져오기
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const data = await getProducts('your_cookie_value');
  //       setProducts(data);
  //     } catch (error) {
  //       console.error(`Failed to fetch products: ${error}`);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

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

  useEffect(() => {
    // 창 크기 변경 시 슬라이드 수 조정
    const handleResize = () => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: getSlidesToShow(),
      }));
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 리사이즈 이벤트 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [settings, setSettings] = useState({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이드 활성화
    autoplaySpeed: 2000, // 자동 슬라이드 시간 간격 설정
    prevArrow: <img src="/img/left-arrow.png" alt="Previous" />,
    nextArrow: <img src="/img/right-arrow.png" alt="Next" />,
  });

  useEffect(() => {
    // 컴포넌트 마운트 시 슬라이드 수 조정
    setSettings((prevSettings) => ({
      ...prevSettings,
      slidesToShow: getSlidesToShow(),
    }));
  }, []);


  return (
    <>
    <div className="card-list">
    <h1>놓치면 후회할 과일</h1>
    <Slider {...settings}>
    {/* 상품 데이터 매핑 */}
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
    {/* 상품 데이터 매핑 */}
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
