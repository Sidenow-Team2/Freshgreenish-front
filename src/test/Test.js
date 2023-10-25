import React, { useEffect, useState } from 'react';
// import { useShopping } from './context/ShoppingContext';
import { useShopping } from './ShoppingContext';

function ProductList() {
  const { state,dispatch } = useShopping();
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3); //페이지네이션 개수

  const [filter, setFilter] = useState('all'); // filter

  

  useEffect(() => {
    console.log('start on ')

    // 데이터를 불러오는 비동기 함수를 정의
    const fetchData = async () => {
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
    console.log(state.products,"start")
  }, [dispatch]); // dispatch를 의존성 배열에 추가하여 컴포넌트가 다시 렌더링될 때 fetchData가 실행될 수 있도록 함
  
  

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = state.products[0] && state.products[0].slice(indexOfFirstProduct, indexOfLastProduct);


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
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
{/* 
        <Pagination
        productsPerPage={productsPerPage}
        totalProducts={state.products[0].length}
        currentPage={currentPage}
        paginate={paginate}
      /> */}
      <Filter items = {state.products[0]} currentProducts={currentProducts} paginate={paginate}/>
    </div>
  );
}


function SortTableList({ items }) {
    const [sortedItems, setSortedItems] = useState([...items]);
    const [sortOrder, setSortOrder] = useState('asc'); // 정렬 기준
    const [sortBy, setSortBy] = useState('price');

    useEffect(() => {
        const sorted = sortArray(items, sortBy, sortOrder);
        setSortedItems(sorted);
        console.log(sortedItems)
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
        console.log('sorted')
    };


    return (
        <div>
            <button onClick={() => changeSortBy('price')}>
               가격 정렬
            </button>
            <button onClick={() => changeSortBy('id')}>
               id 정렬
            </button>
            {/* <button onClick={() => changeSortBy('id')}>
               최신,판매, 좋아요 정렬
            </button> */}
            <button onClick={toggleSortOrder}>
                {sortOrder === 'asc' ? '내림차순' : '오름차순'}
            </button>
            <ul>
                {sortedItems && sortedItems.map((item,) => (
                    <Product key={item.id} initialProduct={item}/>
                    ))}
            </ul>


        </div>
    );
}

function Product( {initialProduct}){
    const { addToCart} = useShopping()
    const [product, setProduct] = useState(initialProduct)

    useEffect( ()=>{

    },[product]);

      return(
        <div className="product">
            
          {/* <h1>{initialProduct.name}</h1>
          <p>가격 : {product.price}</p> */}
          {/* <img
            className='fruit'
            src = {item.imageUrl}
            alt = {item.name}
            style={}
            /> */}
            {/* <button onClick={a}> 구매하기 </button> */}
            프로덕트카드
            <ProductImg id = {product.id} img = {product.img}/>
            <ProductDetail id = {product.id} detail = {product} />
            <button onClick={() => addToCart(product)}>장바구니 담기</button>
        </div>
      );
  };

function ProductImg({img}){

    return(
        <div className='image'>
            <img src={img} alt="image" />
            <div className='goToCartImg'>
                <img src='' alt="gorocartimg"/>
            </div>
        </div>
    );
};
function ProductDetail({detail}){
    const {name, price} = detail;

    return(
        <div className='detail'>
            {name}
            가격 : {price}
             {/* {정기구독 여부} */}
             {/* {할인가격} */}
        </div>
    );
};




function Pagination({ productsPerPage, totalProducts, currentPage, paginate }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

function Filter({items, currentProducts, paginate}){
    const { state,dispatch } = useShopping();
    const products = items

    const [selectedAttribute, setSelectedAttribute] = useState('all');
    const [selectedAttributeValue, setSelectedAttributeValue] = useState('all');


    const filterProductsByName = (products, names) => {
        return products.filter((product) => {
          const nameAttribute = product.name
          console.log(product.name)
          if (names ==='all'){
            console.log('전체조회')
            return true
          }
          if (nameAttribute && names.includes(nameAttribute)) {
            console.log('sucess')
            return true;
          }
          console.log('false')
          return false;
        });
      };


    currentProducts = filterProductsByName(products, selectedAttributeValue);
    // const filteredProducts = filterProductsByName(products, selectedAttributeValue);
      
      
      

  // 선택한 속성 변경 시
  const handleAttributeChange = (event) => {
    setSelectedAttribute(event.target.value);

    if(event.target.value ==='all'){
        setSelectedAttributeValue('all');
        return true
        
    }
    else if(event.target.value ==='name'){
        setSelectedAttributeValue('상품1');
    }
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
    <div>
      <h2>Product List</h2>
      <div>
        <label>
          Filter by Attribute:
          <select value={selectedAttribute} onChange={handleAttributeChange}>
            <option value="all">All</option>
            <option value="name">이름</option>
            {/* 여기에 사용 가능한 속성 목록을 추가합니다. */}
          </select>
        </label>
        {selectedAttribute !== 'all' && (
          <label>
            Attribute Value:
            <select
              value={selectedAttributeValue}
              onChange={handleAttributeValueChange}
            >
              <option value="all">All</option>
              {/* 여기에 선택한 속성에 따른 속성값 목록을 추가합니다. */}
            </select>
          </label>
        )}
      </div>
      <SortTableList items = {currentProducts}/>
      <Pagination
        productsPerPage={3} // 페이지당 상품 수
        totalProducts={items.length}
        currentPage={state.currentPage}
        paginate={paginate} // 페이지 변경 함수 전달
      />
    </div>
  );
}




export default ProductList;