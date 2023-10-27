import React from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../slices/fruitListSlice';
import DecreaseIconPath from '../assets/icon/Disabled=true.svg'; 
import IncreaseIconPath from '../assets/icon/Disabled=true-1.svg';
import DecreaseActiveIconPath from '../assets/icon/Disabled=false.svg'; 
import IncreaseActiveIconPath from '../assets/icon/Disabled=false-1.svg'; 
import '../styles/QuantityControl.scss';

function QuantityControl({ fruitId, quantity }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (changeAmount) => {
    dispatch(changeQuantity({ id: fruitId, change: changeAmount }));
  };

  return (
    <div className="quantity-control">
        <div className="decrease" onClick={() => handleQuantityChange(-1)}>
            <img src={quantity > 1 ? DecreaseActiveIconPath : DecreaseIconPath} alt="Decrease" />
        </div>
        <div className="quantity-value">{quantity}</div>
        <div className="increase" onClick={() => handleQuantityChange(1)}>
            <img src={IncreaseActiveIconPath} alt="Increase" />
        </div>
    </div>
  );
}

export default QuantityControl;
