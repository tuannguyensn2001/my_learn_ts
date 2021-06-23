import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface initClassroomState {
    count: number,
}

const classroomSlice = createSlice({
    name: 'classroom',
    initialState: {
        count: 0
    } as initClassroomState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count += 1;
        },
        incrementSaga: (state, action: PayloadAction<number>) => {

        }
    }
})

const {reducer, actions} = classroomSlice;

export const {increment, incrementSaga} = actions;

export default reducer;