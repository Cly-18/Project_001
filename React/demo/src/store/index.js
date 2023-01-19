import { configureStore } from "@reduxjs/toolkit";
import { mySlice } from "./mySlice";


const store = configureStore({
    reducer: {
        mySlice: mySlice
    }
})
//useSelector((state)=>state.mySlice.value)
//dispatch({type:"b",payload:123})
export default store;