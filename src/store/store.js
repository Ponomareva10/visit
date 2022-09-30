import { configureStore } from "@reduxjs/toolkit";
import { visitSlice } from "./visitSlice";


export const store = configureStore({
    reducer: visitSlice
})
