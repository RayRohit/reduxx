import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoggedIn: false,
    loggedUser: [],
    error: ''
}
export const LogCheck = createAsyncThunk('login/logincheck', (people) => {
    try {
        return axios.get(`http://localhost:3000/Users?email=${people.email}&&pass=${people.pass}`).then((res) => res.data).catch((err) => err)
    }
    catch (err) {
        console.log(err)
    }
})
export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Login(state,actions){
            state.isLoggedIn = actions.payload
        },
        logout() {

        }
    },
    extraReducers: {
        [LogCheck.pending]: (state) => {
            state.isLoggedIn = false
        },
        [LogCheck.fulfilled]: (state, actions) => {
            console.log(actions.payload)
            if (actions.payload === []) {
                state.error = 'Invalid Credentials'
            }else {
                state.loggedUser = actions.payload
            }
        }
    }
})
export const AuthActions = AuthSlice.actions;