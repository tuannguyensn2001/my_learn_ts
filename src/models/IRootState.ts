import {CaseReducer} from "@reduxjs/toolkit";
import {initAuthState} from "../features/Auth/slice";
import {initCartState} from "../features/Cart/slice";

export declare interface IRootState {
    auth: initAuthState,
    cart: initCartState
}

export interface rootReducer {
    auth: CaseReducer,
    cart: CaseReducer
}