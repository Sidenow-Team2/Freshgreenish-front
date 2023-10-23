// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setPage } from '../store';

// const Pagination = () => {
//   const currentPage = useSelector((state) => state.products.currentPage);
//   const itemsPerPage = useSelector((state) => state.products.itemsPerPage);
//   const products = useSelector((state) => state.products.products);

//   const dispatch = useDispatch();

//   // 페이징 처리를 위한 계산
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const handlePageChange = (page) => {
//     dispatch(setPage(page));
//   };

//   return (
//     <div>
//       <ul>
//         {currentProducts.map((product, index) => (
//           <li key={index}>{product.name}</li>
//         ))}
//       </ul>

//       <div>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             disabled={index + 1 === currentPage}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       <p>현재 페이지: {currentPage}</p>
//     </div>
//   );
// };

// export default Pagination;