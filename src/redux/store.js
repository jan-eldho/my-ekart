import { configureStore } from "@reduxjs/toolkit";
import whishlistReducer from "./whishlistSlice"; 
import cartSliceReducer from "./cartSlice";  // Ensure this is imported

const store = configureStore({
    reducer: {
        whishlistReducer,  // Wishlist state
        cartSliceReducer   // Cart state
    }
});

export default store;

