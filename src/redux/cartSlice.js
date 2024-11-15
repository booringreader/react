import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ // returns an object to the cartSlice
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => { // modify state based on teh action
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop(); // remove one item
        },
        clearCart: (state, action) => {
            state.items.length = 0; // makes array empty again
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // export actions
export default cartSlice.reducer;