import {takeEvery, all} from 'redux-saga/effects';
import classroomSaga from "../features/Classroom/slice/saga";


export default function* rootSaga() {
    yield all([
        classroomSaga
    ])
}