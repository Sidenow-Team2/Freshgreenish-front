import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab } from '../slices/TabSlice';
import { setFruits } from '../slices/fruitListSlice';
import { selectAggregateExpectedDate } from '../slices/deliveryDateSlice';
import TabMenu from '../components/TabMenu';
import FruitList from '../components/FruitList';
import TotalPrice from '../components/TotalPrice';
import mockData from '../services/cartMockData.json'
import '../styles/Cart.scss';

function Cart() {
    const dispatch = useDispatch();
    const currentTab = useSelector(state => state.fruits.currentTab);
    const fruits = useSelector(state => state.fruits.fruits);
    const aggregateExpectedDate = useSelector(selectAggregateExpectedDate);


    const handleTabChange = (tab) => {
        dispatch(setCurrentTab(tab));
    }
    

    return (
        <div className="container">
            <div className="cart-title">장바구니</div>
            <div className="select-instruction"> <span> 예상 배송일: {aggregateExpectedDate ? aggregateExpectedDate.toLocaleDateString() : '데이터 없음'}</span> </div>
            <TabMenu onTabChange={handleTabChange}>
                <FruitList currentTab={currentTab} fruits={fruits} setFruits={setFruits} />
            </TabMenu>
            <TotalPrice fruits={fruits}/>
            <button className="submit-button">정기배송 신청하기</button>
        </div>
    );
}

export default Cart;
