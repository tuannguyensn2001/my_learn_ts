import {configureStore} from "@reduxjs/toolkit";
import {rootReducer, IRootState} from "../models/IRootState";
import authSlice from '../features/Auth/slice/index';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import cartSlice from '../features/Cart/slice/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import classroomSlice from "../features/Classroom/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        classroom: classroomSlice
    } as rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(sagaMiddleware);
    }
})

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;