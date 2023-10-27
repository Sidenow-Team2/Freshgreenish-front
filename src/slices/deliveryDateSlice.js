import { createSlice } from '@reduxjs/toolkit';

const today = new Date();
const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(today.getDate() + 7);


export const deliveryDateSlice = createSlice({
    name: 'deliveryDate',
    initialState: {
        deliveryCycles: {},
        aggregateExpectedDate: oneWeekFromNow
    },

    reducers: {
        setDeliveryCycle: (state, action) => {
            const { id, cycle } = action.payload;
            state.deliveryCycles[id] = cycle;
        },
        setAggregateExpectedDate: (state, action) => {
            state.aggregateExpectedDate = action.payload;
        }
    }
});

export const { setDeliveryCycle, setAggregateExpectedDate } = deliveryDateSlice.actions;

export const selectDeliveryCycle = (state, fruitId) => {
    return state.deliveryDate?.deliveryCycles?.[fruitId];
}

export const selectAggregateExpectedDate = (state) => {
    return state.DeliveryDate?.aggregateExpectedDate;
}

export default deliveryDateSlice.reducer;
