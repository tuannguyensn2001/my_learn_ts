import {takeEvery} from 'redux-saga/effects';
import {PayloadAction} from "@reduxjs/toolkit";

function* middleware(action : PayloadAction) {
    console.log(action);
}


export default function* rootSaga() {
    yield takeEvery('*', middleware);
}