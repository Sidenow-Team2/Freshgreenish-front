// DeliveryDate.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryCycle, setAggregateExpectedDate } from '../slices/deliveryDateSlice';

function DeliveryDate({ fruitId, selectedCycle }) {
  const dispatch = useDispatch();
  const deliveryCycles = useSelector(state => state.DeliveryDate.deliveryCycles);
  const currentCycle = deliveryCycles[fruitId] || "배송 주기 변경";

  
  const handleCycleChange = (e) => {
    const cycle = e.target.value;
    const updatedCycles = { ...deliveryCycles, [fruitId]: cycle };
    dispatch(setDeliveryCycle({ id: fruitId, cycle: cycle }));
    
    const aggregateDate = calculateAggregateExpectedDate(updatedCycles);
    dispatch(setAggregateExpectedDate(aggregateDate));
};

  
  const calculateAggregateExpectedDate = (cycles) => {
      const today = new Date();
      if (Object.values(cycles).includes("주 2회")) {
          return new Date(today.setDate(today.getDate() + 3));
      } else {
          return new Date(today.setDate(today.getDate() + 7));
      }
  };

  return (
    <div className="delivery-date-component">
      <select value={currentCycle} onChange={handleCycleChange}>
          <option value="배송 주기 변경" disabled hidden>배송 주기 변경</option>
          <option value="주 1회">주 1회</option>
          <option value="주 2회">주 2회</option>
      </select>
    </div>
  );
}


export default DeliveryDate;
