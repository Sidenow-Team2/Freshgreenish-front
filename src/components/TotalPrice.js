import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/TotalPrice.scss';

function TotalPrice() {
    const fruits = useSelector(state => state.fruits.fruits);

    if (!fruits || !Array.isArray(fruits)) {
        return (
            <div className="total-price">
                <span>구매 예정가: 0원</span>
            </div>
        );
    }

    const totalPrice = fruits.reduce((acc, fruit) => acc + fruit.price * fruit.quantity, 0);

    return (
        <div className="total-price">
            <span>구매 예정가: {totalPrice}원</span>
        </div>
    );
}

export default TotalPrice;
