import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        saveToLocalStorage: (state, action) => {
            action.payload.forEach(item => {
                localStorage.setItem(item.title, item.value)
            });
        }
    }
})

export const { saveToLocalStorage } = authSlice.actions;