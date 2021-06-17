import {configureStore} from "@reduxjs/toolkit";
import {rootReducer, IRootState} from "../models/IRootState";
import authSlice from '../features/Auth/slice/index';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

const store = configureStore({
    reducer: {
        auth: authSlice
    } as rootReducer
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;