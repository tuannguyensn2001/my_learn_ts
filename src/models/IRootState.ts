import {CaseReducer} from "@reduxjs/toolkit";
import {initAuthState} from "../features/Auth/slice";

export declare interface IRootState {
    auth: initAuthState
}

export interface rootReducer {
    auth: CaseReducer
}