import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { changePage, changeItemsPerPage } from '@/redux/store/reducer/paginationSlice';

function Pagination() {
    // const currentPage = useSelector((state) => state.pagination.currentPage);
    // const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
    // const dispatch = useDispatch();

    // const handlePageChange = (newPage) => {
    //     dispatch(changePage(newPage));
    //   };
    
    //   // 페이지당 항목 수 변경 핸들러
    //   const handleItemsPerPageChange = (newItemsPerPage) => {
    //     dispatch(changeItemsPerPage(newItemsPerPage));
    //   };

  
    // for (let i = 1; i <= totalPages; i++) {
    //   pageNumbers.push(i);
    // }
  
    return (
    //   <nav>
        <div>
            {/* <select value={itemsPerPage} onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}/> */}
        </div>


    );
  }
  

  
  export default Pagination;



    //       {/* <ul className="pagination">
    //       {pageNumbers.map(number => (
    //         <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
    //           <button className="page-link" onClick={() => onPageChange(number)}>
    //             {number}
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav> */}