import React, { useEffect, useState } from 'react';
import Pagination from '../pagination/pagination';


// 데이터받아오기
function GetProductList(){
    //sample
    const products = [
        {id: 1, name: '상품 1', price:500},
        {id: 2, name:'product', price:123},
        {id: 3, name:'test', price:123},
        {id: 4, name: '상품 4', price:500},
        {id: 5, name:'product', price:123},
        {id: 6, name:'test', price:123},
        {id: 7, name: '상품 7', price:500},
        {id: 8, name:'product', price:123},
        {id: 9, name:'test', price:123},
        {id: 10, name: '상품 10', price:500},
        {id: 11, name:'product', price:123},
        {id: 12, name:'test', price:123},
        {id: 13, name: '상품 13', price:500},
        {id: 14, name:'product', price:123},
        {id: 15, name:'test15', price:123},
    ];
    // console.log(products)

    const itemsPerPage = 5; // 페이지 당 아이템 수
    const [items, setItems] = useState([]); // 전체 아이템 목록
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  
    useEffect(() => {
      // 전체 아이템 목록을 가져오는 비동기 
      const fetchData = async () => {
        // const response = await fetch('https://');
        // const data = await response.json();
        // setItems(data);
  
        // 전체 페이지 수 계산
        // const totalPages = Math.ceil(data.length / itemsPerPage);
        const totalPages = Math.ceil(products.length / itemsPerPage);
        setTotalPages(totalPages);
      };
  
      fetchData();
      console.log(currentPage,totalPages,products.length)
    }, []);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      console.log(currentPage)
      console.log(displayedItems)
    };
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const displayedItems = items.slice(startIndex, endIndex);
    const displayedItems = products.slice(startIndex, endIndex);
  
    return (
        <>
            <div className="ArrayList">
                <h1>정렬 리스트 </h1>
                <SortTableList items = {products}/>
                
            </div>
            <ProductList product = {displayedItems}/>
            {/* <ProductList product = {products}/> */}
            <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        </>
    );
};


function SortTableList({ items }) {
    const [sortedItems, setSortedItems] = useState([...items]);
    const [sortOrder, setSortOrder] = useState('asc'); // 정렬 기준
    const [sortBy, setSortBy] = useState('price');

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

    // 정렬 방향 변경
    const toggleSortOrder = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
        setSortedItems(sortArray(sortedItems, sortBy, newOrder));
    };

    const changeSortBy = (property) => {
        setSortBy(property);
        setSortedItems(sortArray(sortedItems, property, sortOrder));
        console.log("가격 정렬 버튼 클릭")
        console.log(property)
    };

    return (
        <div>
            <button onClick={() => changeSortBy('price')}>
               가격 정렬
            </button>
            <button onClick={toggleSortOrder}>
                {sortOrder === 'asc' ? '내림차순' : '오름차순'}
            </button>
            <ul>
                {/* {sortedItems.map((item, index) => (
                    <li key={index}>
                        ID: {item.id}, Name: {item.name}, Price: {item.price}
                    </li>
                ))} */}
            </ul>
        </div>
    );
}


function ProductList({product}){
    // 프로덕트 목록 받아서 내려주기
    // const products = [
    //     {id: 1, name: '상품 1', price:500},
    //     {id: 2, name:'product', price:123},
    // ];
    // const [products, setProduct] = useState(product)

    useEffect( () =>{

        console.log("list,리스트 테스트",product)
    },[product]);

    return (
      <div className="product-list">
        {product && product.map( (product) => (
          <Product key={product.id} initialProduct={product} />
        ))}
      </div>
    );
  
  
  };

  // 상품

  // 장바구니버튼 추가하기
function Product( {initialProduct}){
  
    const [product, setProduct] = useState(initialProduct)

    useEffect( ()=>{
        // console.log(product,'start');
        return ()=>{
            console.log(product,"end");
        }
    },[]);


    // const item = {
    //   name : 'apple',
    //   imageUrl : 'https://',
    //   imageSize : '',
    //   price : '',
    // };
  
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


  //필터
  
// function FilterableList() {
//     const [items, setItems] = useState([]);             // 전체 아이템 목록
//     const [filteredItems, setFilteredItems] = useState([]); // 필터링된 아이템 목록
//     const [filterText, setFilterText] = useState('');     // 필터 텍스트
  
//     useEffect(() => {
//       // example
//       const itemsData = [
//         { id: 1, name: '아이템 1' },
//         { id: 2, name: '아이템 2' },
//         { id: 3, name: '아이템 3' },
//         // 추가 아이템들...
//       ];
//       setItems(itemsData);
//       setFilteredItems(itemsData);
//     }, []);
  
//     useEffect(() => {
//       const filteredItemsData = items.filter(item =>
//         item.name.toLowerCase().includes(filterText.toLowerCase())
//       );
//       setFilteredItems(filteredItemsData);
//     }, [filterText, items]);
  
//     const handleFilterChange = (e) => {
//       const newText = e.target.value;
//       setFilterText(newText);
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="검색..."
//           value={filterText}
//           onChange={handleFilterChange}
//         />
//         <ul>
//           {filteredItems.map(item => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  


// pagenation
// function Pagination({ currentPage, totalPages, onPageChange }) {
//     const pageNumbers = [];
  
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//     }
  
//     return (
//       <nav>
//         <ul className="pagination">
//           {pageNumbers.map(number => (
//             <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//               <button className="page-link" onClick={() => onPageChange(number)}>
//                 {number}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   }
  

 




export default function Products(){
    return(
        <div>
        {/* <ProductList/> */}
        {/* <SortTableList/> */}
        <GetProductList/>
        <Pagination/>

        {/* <ProductList/> */}
        </div>
    );
};