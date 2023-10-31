import React, { useEffect, useState } from 'react';
// import { useShopping } from './context/ShoppingContext';
import { useShopping } from './ShoppingContext';
import { fetchProducts } from './api';
import { BrowserRouter as Router, Switch, Route, Link, useNavigate,useParams} from 'react-router-dom';
import Detail from './Detail'; // 상품 상세조회 컴포넌트


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './Test.scss';
import { current } from '@reduxjs/toolkit';

function ProductList() {
  const { state,dispatch } = useShopping();
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9); //페이지네이션 개수

  const [filter, setFilter] = useState('all'); // filter

  

  useEffect(() => {
    console.log('startnow')
    // fetchProducts()

    // 데이터를 불러오는 비동기 함수를 정의
    const fetchData = async () => {
      console.log(currentPage,'currentpage')
      // console.log(state.products[0])
      try {
        const response = await fetch('/dummy.json');
        if (!response.ok) {
          throw new Error('데이터를 가져올 수 없습니다.');
        }
        const data = await response.json();
        const productsArray = Object.values(data);
        dispatch({ type: 'SET_PRODUCTS', payload: productsArray });
        setIsLoading(false);
        console.log('fetch ok')
      } catch (error) {
        console.error('상품 목록을 불러오는 중 오류 발생:', error);
      }
    };

    // fetchData 함수를 호출하여 데이터를 불러옴
    fetchData();
    // console.log(state.products,"start")
  }, [dispatch]); // dispatch를 의존성 배열에 추가하여 컴포넌트가 다시 렌더링될 때 fetchData가 실행될 수 있도록 함
  
  

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = state.products[0] && state.products[0].slice(indexOfFirstProduct, indexOfLastProduct);


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
    const filterProductsByName = (products, selectedAttributeValue) => {
      return products.filter((product) => {
        const nameAttribute = product.name;
        if (selectedAttributeValue === 'all') {
          return true;
        }
        if (nameAttribute && nameAttribute === selectedAttributeValue) {
          return true;
        }
        return false;
      });
    };
    







  if (isLoading) {
    return <p>Loading...</p>; // 데이터 로딩 중에는 "Loading..." 메시지를 표시
  }


  return (
    <div className="product-list">
      {/* <h2>Product List</h2> */}
      {/* {state.products && state.products[0].map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
        ))} */}
        {/* <SortTableList items = {state.products[0]}/> */}
        {/* <SortTableList items = {currentProducts}/> */}
{/* inate
        <Pagination
        productsPerPage={productsPerPage}
        totalProducts={state.products[0].length}
        currentPage={currentPage}
        paginate={paginate}
      /> */}
            <h2>국산 과일</h2>
      <Filter items =
       {state.products[0]} currentProducts={currentProducts} paginate={paginate}
       indexOfLastProduct= {indexOfLastProduct}  indexOfFirstProduct={ indexOfFirstProduct}
       setCurrentPage={setCurrentPage}
      />
    </div>
  );
}


function SortTableList({ items, totalProducts, productsPerPage }) {
    const [sortedItems, setSortedItems] = useState([...items]);
    const [sortOrder, setSortOrder] = useState('asc'); // 정렬 기준
    const [sortBy, setSortBy] = useState('price');

    const pageNumbers = []

    const {id} = useParams()


    useEffect(() => {
        const sorted = sortArray(items, sortBy, sortOrder);
        setSortedItems(sorted);
        console.log(sortedItems,'정렬된 아이템')
      }, [items, sortBy, sortOrder]);

    const sortArray = (array, property, order) => {
        const sorted = [...array];
        sorted.sort((a, b) => {
            if (order === 'asc') {
                return a[property] < b[property] ? -1 : 1;
            } else {
                return a[property] < b[property] ? 1 : -1;
            }
        });
        return sorted;
    };

    const changeSortBy = (property) => {
        setSortBy(property); // 가격 정렬 버튼 클릭 시 sortBy 상태를 업데이트
    const sortedArray = sortArray(items, property, sortOrder);
        setSortedItems(sortedArray);
  };

    // 정렬 방향 변경
    // 숫자 정확하게 하기

    const toggleSortOrder = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
        const sortedArray = sortArray(sortedItems, sortBy, newOrder);
        setSortedItems(sortedArray);
        console.log(sortedArray,'sorted')
      
    };


    const navigate= useNavigate()

    const navigateToProductDetail= (id)=>{
      navigate(`products/${id}`)
      console.log("activate")
    };




    for (let i = 1; i <= Math.ceil(totalProducts/ productsPerPage); i++) {
      pageNumbers.push(i);
      console.log(totalProducts,'pages')
      console.log(pageNumbers,'page push')
    }

    return (
      <div className="filter-item-box">
        <div className="top-box">

          <div className='total'>
            {/* 총 {pageNumbers.length*sortedItems.length}건 */}
          </div>
          <div className='sort-buttons'>
            <div className='button' onClick={() => changeSortBy('id') } onClick={toggleSortOrder}>
              최신순
            </div>
            ㅣ
            <div className='button' onClick={() => changeSortBy('id')}>
              판매순
            </div>
            ㅣ
            <div className='button' onClick={() => changeSortBy('price')} onClick={toggleSortOrder}>
              가격순
            </div>
            ㅣ
            <div className='button' onClick={() => changeSortBy('like')}>
              좋아요순
            </div>
            {/* <button onClick={toggleSortOrder}>
              {sortOrder === 'asc' ? '내림차순' : '오름차순'}
            </button> */}
          </div>
        </div>
    
        <div className='products'>
          {sortedItems && sortedItems.map((item) => (
              <Product key={item.id} initialProduct={item} onClick={() => navigateToProductDetail(item.id)} navigate={navigate} navigateToProductDetail={navigateToProductDetail} />
          ))}
        </div>
      </div>
    );
    }








function Product( {initialProduct, navigateToProductDetail, navigate}){
    const { addToCart} = useShopping()
    const [product, setProduct] = useState(initialProduct)

    useEffect( ()=>{
    },[product]);

      return(
        <div className="product-item"  onClick={() => navigateToProductDetail(initialProduct.id)}>
            
          {/* <h1>{initialProduct.name}</h1>
          <p>가격 : {product.price}</p> */}
          {/* <img
            className='fruit'
            src = {item.imageUrl}
            alt = {item.name}
            style={}
            /> */}
            {/* <button onClick={a}> 구매하기 </button> */}
            <ProductImg id = {product.id} img = {product.img} product={product}/>
            <ProductDetail id = {product.id} detail = {product} />

        </div>
      );
  };

function ProductImg({img,product}){
  const { addToCart} = useShopping()


    return(
      <div className='image-box'>

        <div className='image'>
            <img src={img} alt="image" />
          </div>
          <div className='go-cart'>
            <button onClick={() => addToCart(product)}>
              <img src={"/img/pngegg.png"}/>
            </button>
            {/* <div className='goToCartImg'>
                <img src='' alt="gorocartimg"/>
              </div> */}
          </div>
        </div>
    );
};
function ProductDetail({detail}){
    const {name, price, discountedPrice, discountedRate} = detail;

    return(
        <div className='detail'>
          <div className="name">
            {name}
          </div>
          <div className="price">
            {price} 원
          </div>
            {detail.subscription? <div className='subscription'>{detail.subscription}</div>:<div className="subscription">정기구독</div>}
          <div className="discount-box">
            <div className='discountedRate'>
              {discountedRate}%
            </div>
            

            <div className='discountedPrice'>
              {discountedPrice} 원
            </div>
          </div>

        </div>
    );
};




function Pagination({ productsPerPage, totalProducts, currentPage, paginate }) {
    const pageNumbers = [];


    useEffect(()=>{


      // for (let i = 1; i <= Math.ceil(totalProducts.length / productsPerPage); i++) {
      //   pageNumbers.push(i);
      //   console.log(totalProducts,'pages')
      //   console.log(pageNumbers,'page push')
      // }
      // console.log(pageNumbers,totalProducts,productsPerPage,'pagi')

    },[totalProducts])
  
    for (let i = 1; i <= Math.ceil(totalProducts/ productsPerPage); i++) {
      pageNumbers.push(i);
      console.log(totalProducts,'pages')
      console.log(pageNumbers,'page push')
    }
  
    return (
      <nav>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <div key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </div>
          ))}
        </div>
      </nav>
    );
  }

function Filter({items, currentProducts, paginate,  indexOfLastProduct, indexOfFirstProduct, setCurrentPage}){
    const { state,dispatch } = useShopping();
    const products = items

    const [selectedAttribute, setSelectedAttribute] = useState('all');
    const [selectedAttributeValue, setSelectedAttributeValue] = useState('all');


    const totalProducts = products.length;


    const filterProductsByName = (products, names) => {
      console.log(products,names,'필터 속성')
      // console.log(selectedAttribute,"바뀐값")
        return products.filter((product) => {
          const nameAttribute = product.brand
          // console.log(nameAttribute,names,"속성" )
          if (names ==='all'){
            // console.log('전체조회')
            return true
          }
          if (nameAttribute && names.includes(nameAttribute)) {
            // console.log('sucess')
            return true;
          }
          // console.log('false')
          return false;
        });
      };


    
    const currentChange = filterProductsByName(products, selectedAttribute);

    // currentProducts = state.products[0] && currentChange.slice(indexOfFirstProduct, indexOfLastProduct);
    // currentProducts = currentChange && currentChange
    currentProducts = currentChange.slice(indexOfFirstProduct, indexOfLastProduct);

    // const filteredProducts = filterProductsByName(products, selectedAttributeValue);
      
      

  // 선택한 속성 변경 시
  const handleAttributeChange = (event) => {
    console.log(event.target.value,'필터값')
    setSelectedAttribute(event.target.value);
    setCurrentPage(1)

    // if(event.target.value ==='all'){
    //   console.log(event.target.value)
    //     // setSelectedAttributeValue('all');
    //     return true
        
    // }
    // else if(event.target.value === true){
    //     console.log(event.target.value,'차겟ㅂㄹ류')
    //     setSelectedAttributeValue(event.target.value);
    // }
    // else{
    //   return setSelectedAttributeValue('all')
    // }
  };


  // 선택한 속성값 변경 시
  const handleAttributeValueChange = (event) => {
    setSelectedAttributeValue(event.target.value);
  };

  // 필터링된 상품 목록
//   const filteredProducts = products? filterProducts(
//     products,
//     selectedAttribute,
//     selectedAttributeValue
//   ):[];

  return (
    <div className='products-container'>
      <div className='filter-products'>

      <div className='filter-box'>
        {/* <div className='filter'>

        <label className='filter-label'>
          전체 조회
          <select value={selectedAttribute} onChange={handleAttributeChange}>   

          </select>
        </label>
        </div> */}
        <div className='filter'>
          <label className='filter-label'>
            브랜드
            <select value={selectedAttribute} onChange={handleAttributeChange}>
            <option value="all">All</option>
              <option value="제스프리">제스프리</option>
              <option value="델몬트">델몬트</option>
              <option value="썬키스트">썬키스트</option>

            </select>
          </label>
        </div>
        {/* <div value="all" onClick={handleAttributeChange}> all</div>
        <div value="제스프리" onClick={handleAttributeChange}> 제스프리</div> */}

        {/* {selectedAttribute !== 'all' && (
          <label>
            Attribute Value:
            <select
              value={selectedAttributeValue}
              onChange={handleAttributeValueChange}
              >
              <option value="all">All</option>
              </select>
              </label>
            )} */}
        </div>

        <div className='products-box'>

          <SortTableList items = {currentProducts} totalProducts={totalProducts} productsPerPage={9}/>
        </div>
      </div>


      <div className='pagination-box'>
      <Pagination
        productsPerPage={9} // 페이지당 상품 수
        totalProducts={totalProducts}
        currentPage={state.currentPage}
        paginate={paginate} // 페이지 변경 함수 전달
        />

        </div>
    </div>
  );
}




export default ProductList;