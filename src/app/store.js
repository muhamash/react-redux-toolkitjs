import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counters/counterSlice";
import postSlice from "../features/posts/postSlice";

const store = configureStore( {
    reducer: {
        counter: counterSlice,
        posts: postSlice,
    }
} );

export default store;