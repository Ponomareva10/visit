import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const editUser = createAsyncThunk('user/edit', async (payload, { dispatch }) => {
    try {
        await axios.post('/user/{user}/update')
    } catch (error) {
        console.error(error)
    }
})

export const getUserInfo = createAsyncThunk('user/userInfo', async (payload, { dispatch }) => {
    try {
        const { data } = await axios.get('/users/{user}');
        dispatch(setUserInfo(data))
    } catch (error) {
        console.error(error)
    }
})

const state = {
    id: '',
    firstName: "", 
    lastName: "",
    email: "", 
    image: "", 
    subject: "",
    description: "",
    msisdn: "", 
    msisdnAdditional: "", 
    linkToInstagram: "", 
    linkToTwitter: "",
    linkToFacebook: "", 
    linkToTiktok: "",
    linkToWhatsapp: "",
    linkToYoutube: "", 
    linkToLinkedin: "", 
    linkToTelegram: "",
    website: "",
    linkToVk: "",
    linkToMap: "",
    address: "",
}


export const visitSlice = createSlice({
    name: "visit",
    initialState: state,
    reducers: {
        setUserInfo: (state, action) => {
            state = action.payload
        }
    }
})

export const { setUserInfo } = visitSlice.actions;