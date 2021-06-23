import {PayloadAction} from "@reduxjs/toolkit";
import {takeEvery, delay, put, takeLatest} from "redux-saga/effects";
import {increment, incrementSaga} from "./index";


function* watchIncrement(action: PayloadAction<number>) {
    console.log('waiting for luv');
    yield delay(1000);
    console.log('done');
    yield put(incrementSaga(action.payload));
}


export default function* classroomSaga() {
    yield takeLatest(increment.toString(), watchIncrement);
}