import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";
import {IUser} from "../../../../../models/IUser";
import {fetchLogin, fetchMe} from "../services";

export interface initAuthState {
    isLoggedIn: boolean,
    user: IUser | null,
    isLoading: boolean
}

interface fetchLoginData {
    token: string,
    token_type: string,
    express_in: number,
    user: IUser
}

interface User {
    email: string,
    password: string
}

const dispatchLogin = createAsyncThunk<fetchLoginData, User>('auth/login', async (user, thunkAPI): Promise<fetchLoginData> => {
    const response: AxiosResponse = await fetchLogin(user);

    return response.data as fetchLoginData;

})

const dispatchMe = createAsyncThunk<IUser>('auth/me', async (): Promise<IUser> => {
    const response: AxiosResponse = await fetchMe();
    return response.data as IUser;
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null,
        isLoading: false
    } as initAuthState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(dispatchLogin.fulfilled, (state, {payload}) => {
            state.isLoggedIn = true;
            state.user = payload.user;
            localStorage.setItem('token', payload.token);
        });
        builder.addCase(dispatchMe.fulfilled, (state, {payload}) => {
            state.isLoggedIn = true;
            state.user = payload;
            state.isLoading = false;
        });
        builder.addCase(dispatchMe.pending, (state, {payload}) => {
            state.isLoading = true;
        });
        builder.addCase(dispatchMe.rejected, (state, {payload}) => {
            state.isLoading = false;
            localStorage.removeItem('token');
        })
    })
})

const {reducer, actions} = authSlice;

export {
    dispatchLogin,
    dispatchMe
}


export default reducer;