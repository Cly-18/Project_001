import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const mySlice = createSlice({
    name: "mySlice",
    initialState,
    reducers: (state = initialState, action) => {
        switch (action.type) {
            case "b":
                return { ...state, value: 100 }
            default:
                return { ...state }
        }
    }
})