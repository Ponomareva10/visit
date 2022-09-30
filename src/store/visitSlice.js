import { createSlice } from "@reduxjs/toolkit";

const state = {
    id:1,
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
        editInputs: (state, action) => {
            state = {...state, [action.payload.inputType]: action.payload.value};
        }
        
    }
})

export const {editInputs} = visitSlice.actions;