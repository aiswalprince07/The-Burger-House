import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./reducers/UserReducer";

const store = configureStore({
    reducer:{
        auth : authReducer,
    },
})

export default store;

export const server = "http:localhost:4000/api/v1";