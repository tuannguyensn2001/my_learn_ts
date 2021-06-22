import {CaseReducer} from "@reduxjs/toolkit";
import {initAuthState} from "../features/Auth/slice";
import {initCartState} from "../features/Cart/slice";
import {initClassroomState} from "../features/Classroom/slice";

export declare interface IRootState {
    auth: initAuthState,
    cart: initCartState,
    classroom: initClassroomState
}

// export type IRootState = ReturnType<typeof store.getState>;

export interface rootReducer {
    auth: CaseReducer,
    cart: CaseReducer,
    classroom: CaseReducer
}