import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab} from '../slices/TabSlice';
import { changeQuantity } from '../slices/fruitListSlice';
import { toggleSelectFruit } from '../slices/SelectedFruitsSlice';
import { setFruits, changeDeliveryCycle, deleteFruit } from '../slices/fruitListSlice';
import { setDeliveryCycle } from '../slices/deliveryDateSlice';
import '../styles/FruitList.scss';
import CheckIcon from './CheckIcon';
import DeleteIcon from './DeleteIcon';
import QuantityControl from './QuantityControl';
import DeliveryDate from './DeliveryDate';
import mockData from '../services/cartMockData.json'

function FruitList() {

    const dispatch = useDispatch();
    const currentTab = useSelector(state => state.tab.currentTab);
    const fruits = useSelector(state => state.fruits.fruits);
    const selectedFruits = useSelector(state => state.selectedFruits.selectedFruits);

    const getFilteredFruits = () => {
        if (currentTab === "국산 과일") {
            return fruits.filter(fruit => fruit.type === "국산");
        } else if (currentTab === "냉동 과일") {
           return fruits.filter(fruit => fruit.type === "냉동");
        } else if (currentTab === "수입 과일") {
            return fruits.filter(fruit => fruit.type === "수입");
        } else {
            return fruits;
        }
    }
    

    const handleDeleteFruit = (id) => {
        dispatch(deleteFruit(id));
    };


    return (
        <div className="fruit-list">
            {getFilteredFruits().map((fruit) => (
                <div key={fruit.id} className="fruit-item">
                    <div className="fruit-selection">
                    <button className={`fruit-select-btn ${selectedFruits.includes(fruit.id) ? 'selected' : ''}`}
                    onClick={() => dispatch(toggleSelectFruit(fruit.id))}>
                    <CheckIcon isChecked={selectedFruits.includes(fruit.id)} />
                    </button>
                    </div>
                    <img src={fruit.image} alt={fruit.name} className="fruit-image"/> {/*과일 이미지 추가 */}
                    <span className="fruit-name">{fruit.name}</span>
                    <QuantityControl fruitId={fruit.id} quantity={fruit.quantity} />
                    <div className="delivery-cycle-control">
                        <DeliveryDate
                            fruitId={fruit.id}
                            selectedCycle={fruit.deliveryCycle}
                        />
                    <span className="fruit-price">{fruit.price}원</span> {/* 가격 표시 추가 */}
                    <DeleteIcon onDelete={() => handleDeleteFruit(fruit.id)} />
                    </div>
                    <div className="fruit-type"></div> {/* 국산 또는 냉동 수입 표시 */}
                </div>
            ))}
        </div>
    );
}

export default FruitList;
