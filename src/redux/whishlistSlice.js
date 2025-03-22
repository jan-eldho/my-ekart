import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []  // Ensure it's an array
};

const whishlistSlice = createSlice({
    name: "whishlist",
    initialState,
    reducers: {
        addToWhishlist: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromWhishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
        
    }
});

// Export actions
export const { addToWhishlist, removeFromWhishlist } = whishlistSlice.actions;

// Export reducer
export default whishlistSlice.reducer;
